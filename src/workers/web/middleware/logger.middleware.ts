import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger: Logger = new Logger(LoggerMiddleware.name);

  public use(req: Request, res: Response, next: Function) {
    Logger.log(`[${req.method.toUpperCase()}] - ${req.url}`);
    next();
  }
}
