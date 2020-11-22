import { Injectable, Logger } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { SetupAuditTrail } from '../../../../../database/entities/setupaudittrail.entity';

@Injectable()
export class SetupAuditTrailService {
  public constructor(
    @InjectRepository(SetupAuditTrail)
    private readonly oppRepo: Repository<SetupAuditTrail>
  ) { }

  public async getAdminLoginInfo(): Promise<SetupAuditTrail[]> {
    let result = await this.getAuditTrailStream();
    return Promise.resolve(result);
  }

  public async getAuditTrailStream(): Promise<SetupAuditTrail[]> {
    let auditTrailStream: any[] = [];
    let selectFieldArray: string[] = [ 'createdbyid','action', 'display', 'createddate', 'section', 'delegateuser' ];
    try {
      let setupaudittrailList: SetupAuditTrail[] = await getRepository(SetupAuditTrail)
        .createQueryBuilder('setupaudittrail')
        .select(selectFieldArray)
        .orderBy('createddate', 'DESC')
        .getRawMany();
        setupaudittrailList.forEach((item, index) => {
        let val = [item.createdbyid, item.action, item.display, item.createddate, item.section, item.delegateuser];
        auditTrailStream.push(val);
      });

      return Promise.resolve(auditTrailStream);
    } catch (e) {
      // Something went wrong, we're unable to find the requested opportunity
      let message = `Unable to retrieve all audit trails: ${e.message} \n\n${e.stack}`;
      return Promise.reject(new Error(message));
    }
  }
}
