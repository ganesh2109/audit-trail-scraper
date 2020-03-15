import { Test, TestingModule } from '@nestjs/testing';
import supertest from 'supertest';
import { AppModule } from '../../workers/web/app.module';
import { ConfigureApp } from '../../workers/web/server';
import { TestUtils } from '../test.utils';
import { INestApplication, Logger } from '@nestjs/common';
import { TestModule } from '../test.module';
import { DatabaseService } from '../../database/database.service';

// Disable the logger
Logger.overrideLogger(true);

describe('Workers > Web > AppModule (e2e)', () => {
  let server: INestApplication;
  let testUtils: TestUtils;

  beforeAll(async () => {
    // Create a custom module so we can test the application
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule, TestModule],
      providers: [DatabaseService],
    }).compile();

    // Start the application
    server = await module.createNestApplication();
    await ConfigureApp(server, server.getHttpAdapter());

    // Retrieve the testing utils so we can interact with the test database
    testUtils = module.get<TestUtils>(TestUtils);
    testUtils.use(server);

    await server.init();
  });

  beforeEach(async () => {
    testUtils.logout();
    await testUtils.reloadFixtures();
  });

  it('/error/500 (GET) - should display 500', async done => {
    return supertest(server.getHttpServer())
      .get('/error/500')
      .expect(500)
      .expect((res: any): void => {
        expect(res.text.includes('500')).toEqual(true);
        done();
      });
  });

  it('/error/404 (GET) - should display 404', async done => {
    return supertest(server.getHttpServer())
      .get('/error/404')
      .expect(404)
      .expect((res: any): void => {
        expect(res.text.includes('404')).toEqual(true);
        done();
      });
  });

  afterAll(async () => {
    await testUtils.cleanAll();
    await testUtils.shutdownServer();
  });
});
