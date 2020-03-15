import { ExceptionFilter, Catch, ArgumentsHost, HttpException, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException, UnauthorizedException)
export class BasicAuthLoginFilter implements ExceptionFilter {
  private callback: Function;

  public constructor(callback: Function) {
    this.callback = callback;
  }

  public catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    this.callback(request, response);
  }
}
