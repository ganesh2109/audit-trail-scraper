import { Controller, Get, Render, HttpStatus, HttpCode, UseGuards, Res, Param } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { BaseController } from '../utils/base.controller';
import { SessionGuard } from './auth/guards/session.guard';
import { SamlGuard } from './auth/guards/saml.guard';
import { SessionUser } from './auth/decorators/sessionuser.decorator';
import { SetupAuditTrailService } from './livedata/modules/setupaudittrail/setupaudittrail.service';

@Controller()
export class AppController extends BaseController {

  public constructor(
    private readonly setupAuditTrailService: SetupAuditTrailService
  ) { super(); }
  @Get()
  @UseGuards(SamlGuard)
  @Render('index')
  public index() { }

  @Get('orders')
  @UseGuards(SamlGuard)
  @Render('index')
  public orders() { }

  @Get('profile')
  @UseGuards(SamlGuard)
  @Render('index')
  public settings() { }

  @Get('setupaudittrail/:id')
  @UseGuards(SamlGuard)
  @Render('index')
  public orderDetail() { }

  @Get('/setupaudittrail/load/:id')
  public async loadOrderDetail(@Param('id') orderId) {
    return await this.setupAuditTrailService.getAdminLoginInfo();
  }

  @Get('/sendNotification')
  public async sendNotifications(@Param('message') message){

  }

  @Get('/return')
  @UseGuards(SessionGuard)
  public returnToSalesforce(@Res() res: any, @SessionUser() user) {
    res.redirect(user.issuer);
  }

  @Get('/error/404')
  @Render('errors/404')
  @ApiUseTags('error')
  @HttpCode(HttpStatus.NOT_FOUND)
  public pageNotFound() {
    return this.respond().get();
  }

  @Get('/error/500')
  @Render('errors/500')
  @ApiUseTags('error')
  @HttpCode(HttpStatus.INTERNAL_SERVER_ERROR)
  public internalServerError() {
    return this.respond().get();
  }
}
