import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('salesforce.setupaudittrail')
export class SetupAuditTrail {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ name: 'action', nullable: false })
  public action: string;

  @Column({ name: 'display', nullable: false })
  public display: string;

  @Column({ name: 'delegateuser', nullable: false })
  public delegateuser: string;

  @Column({ name: 'section', nullable: false })
  public section: string;

  @Column({ name: 'createddate', nullable: false })
  public createddate: string;

  @Column({ name: 'createdbyid', nullable: false })
  public createdbyid: string;

  //opportunity_stagename: any;
  //revenue: any;
  //count: string;
}