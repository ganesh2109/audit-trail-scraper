import { Logger, INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { LiveDataGateway } from './livedata.gateway';
import { CasesModule } from './modules/cases/cases.module';
import { SetupAuditTrailModule } from './modules/setupaudittrail/setupaudittrail.module';
import { OrdersModule } from './modules/orders/orders.module';
import { TestModule } from '../../../test/test.module';
import { TestUtils } from '../../../test/test.utils';
import { ConfigureApp } from '../server';
import { AppModule } from '../app.module';
import io from 'socket.io-client';
import { CasesService } from './modules/cases/cases.service';
import { SetupAuditTrailService } from './modules/setupaudittrail/setupaudittrail.service';
import { OrdersService } from './modules/orders/orders.service';

// Disable the logging
Logger.overrideLogger(true);

// setInterval in the controller will cause the tests to hang, use fake one instead
// jest.useFakeTimers();


const opportunitiesService = {
  getOpportunityChartInformation: jest.fn().mockImplementation(() => Promise.resolve([])),
  getOpportunityWonToday: jest.fn().mockImplementation(() => Promise.resolve([])),
  getOpportunityRevenueWonToday: jest.fn().mockImplementation(() => Promise.resolve([])),
  getOpportunityDataByStageRevenue: jest.fn().mockImplementation(() => Promise.resolve([])),
};

const ordersService = {
  getOrderCountChartInformation: jest.fn().mockImplementation(() => Promise.resolve([])),
  getAllOrders: jest.fn().mockImplementation(() => Promise.resolve([])),
  getAllOrdersNamesAsEntities: jest.fn().mockImplementation(() => Promise.resolve([])),
};

describe('Workers > Web > LiveData.Gateway', () => {
  let testUtils: TestUtils;
  let server: INestApplication;
  let wsClient: any;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [TestModule, AppModule, CasesModule, SetupAuditTrailModule, OrdersModule],
      providers: [LiveDataGateway],
    })
      .overrideProvider(SetupAuditTrailService)
      .useValue(opportunitiesService)
      .compile();

    // Start the application
    server = await module.createNestApplication();
    await ConfigureApp(server, server.getHttpAdapter());

    testUtils = module.get<TestUtils>(TestUtils);
    testUtils.use(server);

    // Initialize the application
    await server.init();
  });

  beforeEach(async () => {
    await testUtils.reloadFixtures();

    const address = server
      .getHttpServer()
      .listen()
      .address();

    const baseAddress = `http://[${address.address}]:${address.port}`;
    wsClient = io.connect(`${baseAddress}`);
  });

  afterEach(async () => {
    await testUtils.shutdownServer();

    if (wsClient) {
      wsClient.disconnect();
    }
  });

  it('Should throw exception if user has no session', done => {
    // Client should be immediately disconnected if they do not have a session
    let disconnected = false;

    wsClient.on('disconnect', () => {
      disconnected = true;
    });

    // Ensure we fail in case the connection is maintained
    setTimeout(() => {
      if (!disconnected) {
        fail('Client was not disconnected, i.e. they maintained a connection without a session');
      }

      done();
    }, 2000);
  });

  it('Should connect when the user has a valid session', done => {
    testUtils.loginAsUser();

    // Check whether the user was connected and not immediately disconnected
    let connected = false;

    wsClient.on('disconnect', () => {
      connected = false;
    });

    wsClient.on('connect', () => {
      connected = true;
    });

    // Ensure we fail in case the connection is maintained
    setTimeout(() => {
      if (!connected) {
        fail('Should have connected to the websocket as the user was logged in');
      }

      done();
    }, 2000);
  });
});
