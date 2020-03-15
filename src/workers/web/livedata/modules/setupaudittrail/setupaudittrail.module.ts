import { Module } from '@nestjs/common';
import { SetupAuditTrailService } from './setupaudittrail.service';
import { DatabaseModule } from '../../../../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [SetupAuditTrailService],
  exports: [SetupAuditTrailService]
})

export class SetupAuditTrailModule { }