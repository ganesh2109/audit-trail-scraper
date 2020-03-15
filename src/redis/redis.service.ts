import * as Redis from 'ioredis';
import { Logger, Injectable } from '@nestjs/common';
import mockRedis from 'ioredis-mock';

let client: Redis.Redis;

@Injectable()
export class RedisService {
  private readonly logger = new Logger(RedisService.name);

  public createClient(): Redis.Redis {
    let client;

    if (process.env.NODE_ENV !== 'test') {
      client = new Redis.default(process.env.REDIS_URL);
    } else {
      // ioredis-mock doesn't implement the info method, we need
      // to add it to allow optimal-bull to function correctly
      mockRedis.prototype.info = function() {
        return Promise.resolve('redis_version:2.8.18');
      };
      client = new mockRedis(process.env.REDIS_URL);
    }

    return client;
  }

  public getClient(): Promise<Redis.Redis> {
    return new Promise(resolve => {
      if (!client) {
        // If we are running unit tests, then do not attempt to connect
        // to a real Redis instance
        client = this.createClient();

        client.on('error', err => {
          this.logger.error(`${err.message} \n\n ${err.stack}`);
        });
        client.on('connect', () => {
          this.logger.log('Connected to Redis successfully!');
          resolve(client);
        });
      } else {
        resolve(client);
      }
    });
  }

  public async get(key: string, defaultValue: any): Promise<any> {
    const client = await this.getClient();

    return new Promise((resolve, reject) => {
      client.exists(key, (err, exists) => {
        if (err) {
          return reject(err);
        }

        if (exists) {
          client.get(key, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        } else {
          resolve(defaultValue);
        }
      });
    });
  }

  public set(key: string, value: any): Promise<string> {
    return new Promise((resolve, reject) => {
      this.getClient()
        .then(client => {
          client.set(key, value, function(err, reply) {
            if (err) {
              reject(err);
            } else {
              resolve(reply);
            }
          });
        })
        .catch(err => {
          this.logger.error('Failed to get Redis client');
          reject(err);
        });
    });
  }

  public delete(key: string): Promise<number> {
    return new Promise((resolve, reject) => {
      this.getClient()
        .then(client => {
          client
            .del(key)
            .then(resolve)
            .catch(reject);
        })
        .catch(err => {
          this.logger.error('Failed to get Redis client');
          reject(err);
        });
    });
  }

  public async disconnect(flush: boolean = false): Promise<void> {
    if (client) {
      if (flush) {
        await client.flushall();
      }

      client.disconnect();
      client = null;
    }
  }
}
