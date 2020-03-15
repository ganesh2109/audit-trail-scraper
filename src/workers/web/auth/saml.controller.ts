/* eslint-disable @typescript-eslint/camelcase */
import { Controller, Get, Req, Res, Post, UseGuards } from '@nestjs/common';
import { BaseController } from '../../utils/base.controller';
import { ApiUseTags } from '@nestjs/swagger';
import { SamlGuard } from './guards/saml.guard';
import { Strategy } from 'passport-saml';
import { readFileSync } from 'fs';
import { SessionGuard } from './guards/session.guard';
import { SamlStrategy } from './strategies/saml.strategy';
import { SessionUser } from './decorators/sessionuser.decorator';

@Controller('auth/saml')
@ApiUseTags('auth')
export default class SamlController extends BaseController {
  public constructor(private readonly samlStrategy: SamlStrategy) {
    super();
  }

  @Get('login')
  @UseGuards(SamlGuard)
  public handleLogin() { }

  @Post('callback')
  @UseGuards(SamlGuard)
  public handleCallback(@Res() res: any) {
    res.redirect('/');
  }

  @Get('logout')
  @UseGuards(SessionGuard)
  public logout(@Req() req, @Res() res) {
    (this.samlStrategy as any).logout(req, (err, request) => {
      if (!err) {
        req.logout();
        res.redirect(request);
      }
    });
  }

  @Get('logout/callback')
  public logoutCallback(@Req() req, @Res() res) {
    req.logout();
    res.send(
      '<h1>Logout Success</h1>' +
      '<h2><a href="/auth/login">Login</a></h2>' +
      '<h2><a href="/auth/user" target="_blank">User</a></h2>'
    );
  }

  @Get('profile')
  @UseGuards(SessionGuard)
  public retrieveProfile(@SessionUser() sessionUser): string {
    if (sessionUser != null) {
      var userProfile = { userediturl: '', nickname: '', profilepic: '', fullPhotoUrl: '', username: '', email: '', alias: '', phone: '', extension: '', fax: '', mobilephone: '', street: '', city: '', postalcode: '', state: '', country: '' };
      if (sessionUser.smallphotourl) userProfile.profilepic = sessionUser.smallphotourl;
      if (sessionUser.fullPhotoUrl) userProfile.fullPhotoUrl = sessionUser.fullPhotoUrl;
      if (sessionUser.username) userProfile.username = sessionUser.username;
      if (sessionUser.email) userProfile.email = sessionUser.email;
      if (sessionUser.alias) userProfile.alias = sessionUser.alias;
      if (sessionUser.phone) userProfile.phone = sessionUser.phone;
      if (sessionUser.extension) userProfile.extension = sessionUser.extension;
      if (sessionUser.fax) userProfile.fax = sessionUser.fax;
      if (sessionUser.mobilephone) userProfile.mobilephone = sessionUser.mobilephone;
      if (sessionUser.street) userProfile.street = sessionUser.street;
      if (sessionUser.city) userProfile.city = sessionUser.city;
      if (sessionUser.postalcode) userProfile.postalcode = sessionUser.postalcode;
      if (sessionUser.state) userProfile.state = sessionUser.state;
      if (sessionUser.country) userProfile.country = sessionUser.country;
      if (sessionUser.nickname) userProfile.nickname = sessionUser.nickname;
      if (sessionUser.userediturl) userProfile.userediturl = sessionUser.userediturl;


      console.log(userProfile);
      return JSON.stringify(userProfile);
    } else {
      return 'test';
    }
  }
}
