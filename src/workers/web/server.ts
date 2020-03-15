// Environmental variables
import 'dotenv/config';
import verifyEnv from '../../utils/app.verifyenv';

import { ExpressAdapter } from '@nestjs/platform-express';

// Verify that the env variables are set correctly
verifyEnv();

// NestJS
import { NestFactory } from '@nestjs/core';
import urls from '../utils/url.constants';

// Security
import session from 'express-session';
import connectRedis from 'connect-redis';
import rateLimit from 'express-rate-limit';

// Handlebars and locale
import exphbs from 'express-handlebars';
import HandlebarsIntl from 'handlebars-intl';
import intlMiddleware from './middleware/intl.middleware';
import '../../localization/locale.polyfill';
import userInfo from './middleware/userinfo.middleware';

// Utilities
import * as path from 'path';
import { RedisService } from '../../redis/redis.service';
import passport = require('passport');

import { HttpExceptionFilter } from './filters/httpexception.filter';
import { TimeoutInterceptor } from './interceptors/timeout.interceptor';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';
import helmet = require('helmet');
import { EventsAdapter } from './wsadapter';

let passportInit, passportSession, sessionMiddleware;

function setupLocales(app) {
  app.set('default locale', 'en-US');
}

async function setupSecurity(server, app) {
  let isProd = process.env.NODE_ENV === 'production';
  //const service: RedisService = server.select(AppModule).get(RedisService);

  // Set up the session management
  /*let options = {
    client: await service.getClient(),
  };*/
  let RedisStore = connectRedis(session);

  sessionMiddleware = session({
    //store: new RedisStore(options),
    secret: process.env.SESSION_COOKIE_SECRET,
    proxy: isProd,
    cookie: {
      httpOnly: true,
      expires: true,
      maxAge: 3600000,
      secure: isProd,
      signed: true,
      domain: process.env.SERVER_DOMAIN,
      path: '/',
      sameSite: 'lax',
    },
    resave: false,
    rolling: true,
    saveUninitialized: false,
  });

  app.enable('trust proxy');
  app.use(sessionMiddleware);

  // Rate limiting
  let uiRateLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: parseInt(process.env.RATE_LIMITER_UI_MAX_REQUESTS), // limit each IP to 100 requests per windowMs
  });

  app.use('/', uiRateLimiter);
  app.use(urls.UI_MOUNT_BASE_URL, uiRateLimiter);

  // Initialize and start the session
  passportInit = passport.initialize();
  passportSession = passport.session();
  app.use(passportInit);
  app.use(passportSession);

  // Expose the user to all requests so we can use it in templates
  app.use(userInfo);

  // Ensure we have the relevant interceptors setup
  server.useGlobalInterceptors(new TimeoutInterceptor());

  // Set up the base helmet protection
  // Note: this will be overridden with specific settings from within NestJS AppModule
  app.use(
    helmet({
      dnsPrefetchControl: true,
      frameguard: {
        action: 'deny',
      },
      hidePoweredBy: { setTo: '' },
      hpkp: false,
      hsts: true,
      ieNoOpen: true,
      noCache: true,
      noSniff: true,
      xssFilter: true,
      expectCt: true,
    })
  );
  app.use(helmet.referrerPolicy({ policy: 'strict-origin' }));
}

function setupView(server, app: any) {
  // We need to disable x-powered-by here to ensure the static resources do not bleed out information
  app.disable('x-powered-by');

  // Set up the base paths for resources
  server.setBaseViewsDir(path.join(__dirname, 'views'));
  const assets = path.join(__dirname, 'public');
  server.useStaticAssets(assets);

  // Register Handlebars with Express, and Handlebars Intl with Handlebars.
  let hbs = exphbs.create({
    extname: '.hbs',
    defaultLayout: 'main',
  });
  app.engine(hbs.extname, hbs.engine);
  app.set('view engine', hbs.extname);

  // Add localization support to Handlebars
  HandlebarsIntl.registerWith(hbs.handlebars);
  app.use(intlMiddleware);
}

function setupFilters(server) {
  server.useGlobalFilters(new HttpExceptionFilter());
}

async function ConfigureApp(server, app: any): Promise<void> {
  // Configure the application
  setupLocales(app);
  await setupSecurity(server, app);
  setupView(server, app);
  setupFilters(server);
}

async function CreateServer(module: any, app: any): Promise<INestApplication> {
  // Create the application
  const server = await NestFactory.create(module, new ExpressAdapter(app));
  await ConfigureApp(server, app);

  let adapter = new EventsAdapter(server);
  adapter.usePassport({ passportInit, passportSession, sessionMiddleware });

  server.useWebSocketAdapter(adapter);
  return server;
}

export { CreateServer, ConfigureApp };
