import { CanActivate, ExecutionContext, UnauthorizedException, Injectable } from '@nestjs/common';

@Injectable()
export class SessionGuard implements CanActivate {

  public canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();

    try {
      if (request.session.passport.user) {
        console.log('SESSIONUSER:::' + request.session.passport.user);
        return true;
      }
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}