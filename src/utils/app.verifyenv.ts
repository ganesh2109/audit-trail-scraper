import { Logger } from '@nestjs/common';

let logger = new Logger('VerifyEnvVariables');
let verified = false;

let envVariables = [
  'SERVER_DOMAIN',
  'APP_NAME',
  'PORT',
  'SESSION_COOKIE_SECRET',
  'SESSION_JWT_SECRET',
  'SESSION_JWT_EXPIRES_IN',
  'SESSION_PASSWORD_INVALID_RESET_DURATION',
  'SESSION_INVALID_PASSWORD_COUNT',
  'TYPEORM_CONNECTION',
  'TYPEORM_HOST',
  'TYPEORM_USERNAME',
  'TYPEORM_PASSWORD',
  'TYPEORM_DATABASE',
  'TYPEORM_PORT',
  'TYPEORM_SYNCHRONIZE',
  'TYPEORM_LOGGING',
  'TYPEORM_ENTITIES',
  'TYPEORM_SUBSCRIBERS',
  'TYPEORM_MIGRATIONS',
  'TYPEORM_MIGRATIONS_DIR',
  'REDIS_URL',
];

export const ENV_VARIABLES = envVariables;

export default function(force: boolean = false): void {
  // Ensure we only verify once
  if (verified && !force) {
    return;
  }
  verified = true;

  // Verification not done
  ENV_VARIABLES.forEach((env): void => {
    if (process.env[env] === undefined) {
      throw new Error(`Environment variable is not set: ${env}`);
    }

    // Only output the variables to the console to support development
    // For testing and production suppress this to avoid leaking data to the log
    if (process.env.NODE_ENV === 'development') {
      logger.log(`process.env[${env}] = ${process.env[env]}`);
    }
  });
}
