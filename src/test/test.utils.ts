import { Injectable, INestApplication } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

import * as Path from 'path';
import * as fs from 'fs';
import roles from '../workers/utils/role.constants';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Server } from 'socket.io';

class EventsAdapter extends IoAdapter {
  private app: INestApplication;
  private utils: TestUtils;

  public constructor(app: INestApplication) {
    super(app);
    this.app = app;
  }

  public use(utils: TestUtils) {
    this.utils = utils;
  }

  public createIOServer(port: number, options?: any): any {
    const server: Server = super.createIOServer(port, options);

    server.use((socket, next) => {
      if (this.utils.isLoggedIn) {
        // @ts-ignore
        socket.handshake.session = {
          passport: {
            user: this.utils.loggedInUser,
          },
        };
      } else {
        // @ts-ignore
        delete socket.handshake.session;
      }

      next();
    });

    return server;
  }
}

/**
 * This class is used to support database
 * tests with unit tests in NestJS.
 *
 * This class is inspired by https://github.com/jgordor
 * https://github.com/nestjs/nest/issues/409#issuecomment-364639051
 */
@Injectable()
export class TestUtils {
  private app: INestApplication;
  public isLoggedIn: boolean = false;
  public isAdmin: boolean = true;
  public loginAsUserMiddleRegistered: boolean = false;
  public loggedInUser: any = undefined;

  /**
   * Creates an instance of TestUtils
   */
  public constructor(private readonly databaseService: DatabaseService) {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error('Security error: cannot invoke test utilities when NODE_ENV is not set to TEST');
    }
  }

  /**
   * Specifies the app which is in context.
   */
  public use(app: INestApplication) {
    this.app = app;

    this.registerLoginAsUserMiddleware(app);
  }

  /**
   * Shutdown the http server
   * and close database connections
   */
  public async shutdownServer() {
    await this.app.getHttpServer().close();
    await this.closeDbConnection();
  }

  /**
   * Closes the database connections
   */
  public async closeDbConnection() {
    const connection = await this.databaseService.connection;
    if (connection.isConnected) {
      await (await this.databaseService.connection).close();
    }
  }

  /**
   * Returns the entites of the database
   */
  public async getEntities() {
    const entities = [];
    (await (await this.databaseService.connection).entityMetadatas).forEach(x =>
      entities.push({ name: x.name, tableName: x.tableName })
    );
    return entities;
  }

  /**
   * Cleans the database and reloads the entries
   */
  public async reloadFixtures() {
    await this.cleanAll();
    await this.loadAll();
  }

  /**
   * Cleans all the entities
   */
  public async cleanAll() {
    const entities = await this.getEntities();
    try {
      for (const entity of entities) {
        const repository = await this.databaseService.getRepository(entity.name);
        let query = `DELETE FROM "${entity.tableName}";`;
        await repository.query(query);
      }
    } catch (error) {
      throw new Error(`ERROR: Cleaning test db: ${error}
      ${error.stack}`);
    }
  }

  /**
   * Insert the data from the src/test/fixtures folder
   */
  public async loadAll() {
    const entities = await this.getEntities();

    let entityOrder = ['Case', 'Opportunity', 'Order', 'OrderProduct'];
    let data = new Map();

    try {
      // Load the fixtures, but don't insert them just yet
      for (const entity of entities) {
        const repository = await this.databaseService.getRepository(entity.name);
        const fixtureFile = Path.join(__dirname, `fixtures/${entity.tableName.toLowerCase()}.json`);

        if (fs.existsSync(fixtureFile)) {
          const items = JSON.parse(fs.readFileSync(fixtureFile, 'utf8'));

          if (items.length) {
            data.set(
              entity.name,
              repository
                .createQueryBuilder(entity.name)
                .insert()
                .values(items)
            );
          }
        }
      }

      // Create the data in the correct order
      for (let i = 0; i < entityOrder.length; i++) {
        if (data.has(entityOrder[i])) {
          await data.get(entityOrder[i]).execute();
        }
      }
    } catch (error) {
      throw new Error(`ERROR [TestUtils.loadAll()]: Loading fixtures on test db: ${error}`);
    }

    return Promise.resolve();
  }

  /**
   * Utility for logging into the application as a user.
   */
  public loginAsUser(user = {}): void {
    this.isLoggedIn = true;
    this.isAdmin = true;
    this.loggedInUser = {
      ...user,
      roles: [roles.ADMIN],
    };
  }

  /**
   * Utility for logging users out of the application without having to go through
   * the complete logout process.
   */
  public logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;
  }

  /**
   * This will register a middleware to help with logging in and out of the application
   * without having to walk through the login process.
   */
  private registerLoginAsUserMiddleware(app: INestApplication) {
    if (!this.loginAsUserMiddleRegistered) {
      this.loginAsUserMiddleRegistered = true;

      let adapter = new EventsAdapter(app);
      adapter.use(this);
      app.useWebSocketAdapter(adapter);

      app.use((req, res, next) => {
        // Update the UI template to indicate logged in
        res.locals.loggedIn = this.isLoggedIn;
        res.locals.isAdmin = this.isAdmin;

        // Use a fixed CSRF token
        req.session.csrfSecret = 'Secret!';

        // Update the session state
        if (this.isLoggedIn) {
          // Log the user in
          if (!req.session) {
            req.session = {};
          }

          if (!req.session.passport) {
            req.session.passport = {};
          }

          // Set the user
          req.session.passport.user = this.loggedInUser;
        } else {
          // Log out the user if a session exists
          if (req.session && req.session.passport) {
            delete req.session.passport;
          }
        }
        next();
      });
    }
  }
}
