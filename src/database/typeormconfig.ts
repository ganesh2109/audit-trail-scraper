// Data types
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// Environmental variables
import 'dotenv/config';
import verifyEnv from '../utils/app.verifyenv';

// Verify that the env variables are set correctly
verifyEnv();

let config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [process.env.TYPEORM_ENTITIES],
  synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
  ssl: process.env.TYPEORM_SSL === 'true',
};

if (process.env.NODE_ENV === 'test') {
  config = {
    type: 'sqlite',
    database: `${__dirname}/data/test.sqlite`,
    entities: [process.env.TYPEORM_ENTITIES],
    synchronize: true,
    logging: process.env.TYPEORM_LOGGING === 'true',
  };
}

export const TYPEORM_CONFIG = config;
