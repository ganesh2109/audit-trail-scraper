import { Logger } from '@nestjs/common';
import { RedisService } from './redis.service';
import { Test } from '@nestjs/testing';

// Disable the logging
Logger.overrideLogger(true);

describe('Redis > RedisService', () => {
  let service: RedisService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [RedisService],
    }).compile();

    service = module.get<RedisService>(RedisService);
  });

  it('Should return client for Redis', async () => {
    let client: any = await service.getClient();
    expect(client).not.toBeUndefined();
  });

  it('Should should set and get same value', async () => {
    await service.set('test:key', 'hello world');
    let result = await service.get('test:key', 'default');
    expect(result).toEqual('hello world');
  });

  it('Should should return default when no value exists', async () => {
    let result = await service.get('test:key', 'default');
    expect(result).toEqual('default');
  });

  afterEach(async () => {
    // Clean up and remove all of the keys
    let client: any = await service.getClient();
    client.flushall();

    // Disconnect from Redis
    await service.disconnect(true);
  });
});
