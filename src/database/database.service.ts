import { Inject, Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class DatabaseService {
  public constructor(@Inject('Connection') public connection: Connection) {}

  public async getRepository<T>(entity): Promise<Repository<T>> {
    return await this.connection.getRepository(entity);
  }
}
