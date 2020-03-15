import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { CookieSerializer } from './serializers/cookie-serializer';
import { SessionGuard } from './guards/session.guard';
import { DatabaseModule } from '../../../database/database.module';
import { RolesGuard } from './guards/roles.guard';
import { SamlStrategy } from './strategies/saml.strategy';
import SamlController from './saml.controller';
import { SamlGuard } from './guards/saml.guard';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'saml',
      property: 'user',
      session: true,
    }),
    DatabaseModule,
  ],
  controllers: [SamlController],
  providers: [
    // Strategies
    SamlStrategy,

    // Guards
    SamlGuard,
    SessionGuard,
    RolesGuard,

    // Serializers
    CookieSerializer,
  ],
  exports: [PassportModule, SamlStrategy, SamlGuard, SessionGuard, CookieSerializer],
})
export default class AuthModule { }
