import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { DatabaseService } from '../database/database.service';
import { TestUtils } from './test.utils';

@Module({
  imports: [DatabaseModule],
  providers: [DatabaseService, TestUtils],
  exports: [TestUtils],
})
export class TestModule {
  public constructor() {}
}
