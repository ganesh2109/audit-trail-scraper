import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  public constructor(private readonly reflector: Reflector) {}

  public canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();

    // Attempt to extract the user from the session
    let user;

    try {
      user = request.session.passport.user;
    } catch (e) {
      user = null;
    }

    const hasRole = () => user.roles.some(role => !!roles.find(item => item === role));

    return user && user.roles && hasRole();
  }
}
