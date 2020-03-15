import { Module, Global } from '@nestjs/common';
import { LiveDataGateway } from './livedata.gateway';
import { SetupAuditTrailModule } from './modules/setupaudittrail/setupaudittrail.module';

@Global()
@Module({
  imports: [SetupAuditTrailModule],
  controllers: [],
  providers: [LiveDataGateway],
  exports: [],
})
export default class LiveDataModule { }
