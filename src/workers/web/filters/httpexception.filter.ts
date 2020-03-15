import { ExceptionFilter, ArgumentsHost, HttpException, Logger, HttpStatus } from '@nestjs/common';

export class HttpExceptionFilter implements ExceptionFilter {
  private logger: Logger = new Logger(HttpExceptionFilter.name);

  public catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    let status = exception.getStatus ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    let requiresLog = true;

    // Ignore .map and manifest.json requests, they just pollute the log
    if (request.url && (request.url.endsWith('.map') || request.url.endsWith('manifest.json'))) {
      requiresLog = false;
    }

    if (requiresLog) {
      this.logger.error(`${request.url} [${status}]: ${JSON.stringify(exception.message)}`);
    }

    if (request.accepts('html')) {
      if (status == 403) {
        // Reroute user to login screen
        response.redirect('/');
      } else {
        // All other errors
        if (status != 404 && status != HttpStatus.INTERNAL_SERVER_ERROR) {
          status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        response.redirect(`/error/${status}`);
      }
    } else {
      response.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }
}
