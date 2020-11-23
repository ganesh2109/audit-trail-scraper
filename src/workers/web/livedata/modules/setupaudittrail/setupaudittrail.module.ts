import { HttpModule, Module } from '@nestjs/common';
import { SetupAuditTrailService } from './setupaudittrail.service';
import { DatabaseModule } from '../../../../../database/database.module';

@Module({
  imports: [DatabaseModule, HttpModule ],
  controllers: [],
  providers: [SetupAuditTrailService],
  exports: [SetupAuditTrailService]
})

export class SetupAuditTrailModule { }