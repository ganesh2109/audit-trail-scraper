import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('salesforce.setupaudittrail')
export class SetupAuditTrail {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ name: 'action', nullable: false })
  public action: string;

  //opportunity_stagename: any;
  //revenue: any;
  //count: string;
}