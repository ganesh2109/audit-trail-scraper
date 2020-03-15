import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TYPEORM_CONFIG } from './typeormconfig';
import { DatabaseService } from './database.service';
import { SetupAuditTrail } from './entities/setupaudittrail.entity';

const entities = [SetupAuditTrail];

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => TYPEORM_CONFIG,
    }),
    TypeOrmModule.forFeature(entities),
  ],
  controllers: [],
  providers: [DatabaseService],
  exports: [TypeOrmModule.forRoot(TYPEORM_CONFIG), TypeOrmModule.forFeature(entities)],
})
export class DatabaseModule { }
