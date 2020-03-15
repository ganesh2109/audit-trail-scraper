import { IoAdapter } from '@nestjs/platform-socket.io';
import { Server } from 'socket.io';
import sharedsession from 'express-socket.io-session';
import { INestApplication } from '@nestjs/common';

/**
 * Enable session tokens for web sockets by using express-socket.io-session
 */
export class EventsAdapter extends IoAdapter {
  private app: INestApplication;
  private passportInit;
  private passportSession;
  private sessionMiddleware;

  public constructor(app: INestApplication) {
    super(app);
    this.app = app;
  }

  public usePassport({ passportInit, passportSession, sessionMiddleware }) {
    this.passportInit = passportInit;
    this.passportSession = passportSession;
    this.sessionMiddleware = sessionMiddleware;
  }

  public createIOServer(port: number, options?: any): any {
    const server: Server = super.createIOServer(port, options);
    let self = this;

    server.use(function(socket, next) {
      self.passportInit(socket.client.request, socket.client.request.res, next);
    });

    server.use(function(socket, next) {
      self.passportSession(socket.client.request, socket.client.request.res, next);
    });

    server.use(sharedsession(this.sessionMiddleware));

    return server;
  }
}
