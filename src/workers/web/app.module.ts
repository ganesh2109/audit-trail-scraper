import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { LocalizationService } from '../../localization/localization.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import AuthModule from './auth/auth.module';
import detectLocale from '../../localization/detect.locale';
import { SetupAuditTrailModule } from './livedata/modules/setupaudittrail/setupaudittrail.module';

import {
  HelmetMiddleware,
  HelmetIeNoOpenMiddleware,
  HelmetReferrerPolicyMiddleware,
  HelmetFrameguardMiddleware,
} from '@nest-middlewares/helmet';

import { CompressionMiddleware } from '@nest-middlewares/compression';
import { ConnectTimeoutMiddleware } from '@nest-middlewares/connect-timeout';
import { CsurfMiddleware } from '@nest-middlewares/csurf';
import { DatabaseModule } from '../../database/database.module';
import { RedisModule } from '../../redis/redis.module';
import { LocalizationModule } from '../../localization/localization.module';
import LiveDataModule from './livedata/livedata.module';

@Module({
  imports: [
    DatabaseModule,
    RedisModule,
    LocalizationModule,
    AuthModule,
    LiveDataModule,
    SetupAuditTrailModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    // Apply the custom logger middleware
    consumer.apply(LoggerMiddleware).forRoutes('/');

    // Apply frame guard
    HelmetFrameguardMiddleware.configure({
      action: 'deny',
    });

    // Enforce referrer policy
    HelmetReferrerPolicyMiddleware.configure({
      policy: 'strict-origin',
    });

    // Compression
    CompressionMiddleware.configure({
      level: 9,
    });

    // Connect timeout protection
    ConnectTimeoutMiddleware.configure('5000', {
      respond: false,
    });

    // CSRF Protection
    CsurfMiddleware.configure({
      cookie: false,
      ignoreMethods: ['GET', 'HEAD', 'OPTIONS'],
      sessionKey: 'session',
    });
    var styledirective = ["'self'", "https://*", "'unsafe-inline'"];
    var imagedirective = ["'self'", "https://*"];

    // Apply Helmet - specific settings for non-sub-apps
    HelmetMiddleware.configure({
      contentSecurityPolicy: {
        reportOnly: false,
        setAllHeaders: false,
        disableAndroid: false,
        browserSniff: false,
        directives: {
          imgSrc: imagedirective,
          styleSrc: styledirective,
          scriptSrc: styledirective,
          defaultSrc: imagedirective
        },
      },
    });

    [
      HelmetMiddleware,
      HelmetFrameguardMiddleware,
      HelmetIeNoOpenMiddleware,
      CompressionMiddleware,
      ConnectTimeoutMiddleware,
    ].forEach(m => {
      consumer.apply(m).forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      });
    });

    // Inject all labels using our custom middleware
    consumer
      .apply(function (req, res, next) {
        let requestedLanguage = detectLocale(req);
        res.locals.label = new LocalizationService().getLabels(requestedLanguage).labels;
        next();
      })
      .forRoutes('*');

    // Ensure all requests have a csrf token available
    // We need to apply the middleware specifically for the root route
    consumer.apply(CsurfMiddleware).forRoutes(AppController);

    // Everything under /ui is app specific, apply the CSRF middleware
    consumer.apply(CsurfMiddleware).forRoutes({
      path: '/ui/*',
      method: RequestMethod.ALL,
    });

    // Ensure we inject the CSRF token into all requests except specific routes
    // where it is not relevant
    consumer
      .apply(function (req, res, next) {
        let needsCSRF = true;

        if (needsCSRF && typeof req.csrfToken === 'function') {
          res.locals.csrfToken = req.csrfToken();
        }

        next();
      })
      .forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      });
  }
}
