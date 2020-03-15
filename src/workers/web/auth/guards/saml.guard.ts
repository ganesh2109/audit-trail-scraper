import { ExecutionContext, UnauthorizedException, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Injectable()
export class SamlGuard extends AuthGuard('saml') {

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    let result = false;
    let hasSession = false;

    try {
      hasSession = !!request.session.passport.user;
    } catch (e) {
      // Noop
    }

    if (!hasSession) {
      result = (await super.canActivate(context)) as boolean;
      await super.logIn(request);
    } else {
      // User has a session
      result = true;
    }
    return Promise.resolve(result);
  }

  public handleRequest(err, user) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }

    return user;
  }
}
