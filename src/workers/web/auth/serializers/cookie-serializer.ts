import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CookieSerializer extends PassportSerializer {
  public serializeUser(user: any, done: Function): any {
    done(null, user);
  }

  public deserializeUser(payload: any, done: Function): any {
    done(null, payload);
  }
}
