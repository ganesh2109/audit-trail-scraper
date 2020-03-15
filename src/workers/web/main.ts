// Environmental variables
import 'dotenv/config';
import verifyEnv from '../../utils/app.verifyenv';

// Verify that the env variables are set correctly
verifyEnv();

// NestJS
import express from 'express';
import { AppModule } from './app.module';
import { CreateServer } from './server';

async function bootstrap() {
  // Create the server
  const app = express();
  const server: any = await CreateServer(AppModule, app);

  server.set('trust proxy', 1);

  // Create the server
  await server.listen(process.env.PORT || 3002);
}

bootstrap();
