import { Module, Global } from '@nestjs/common';
import { LocalizationService } from './localization.service';

@Global()
@Module({
  providers: [LocalizationService],
  exports: [LocalizationService],
})
export class LocalizationModule {}
