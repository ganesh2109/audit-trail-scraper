import { Injectable, Logger } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { SetupAuditTrail } from '../../../../../database/entities/setupaudittrail.entity';
import { Chart } from '../../livedata.chart';

@Injectable()
export class SetupAuditTrailService {
  public constructor(
    @InjectRepository(SetupAuditTrail)
    private readonly oppRepo: Repository<SetupAuditTrail>
  ) { }

  public async getAdminLoginInfo(): Promise<SetupAuditTrail[]> {
    // let result: Chart = {
    //   data: {
    //     entities: ['Stage', 'Revenue'],
    //     values: await this.getAuditTrailStream(),
    //   },
    //   meta: {
    //     chartType: 'BarChart',
    //     width: '100%',
    //     height: '300px',
    //     options: {
    //       title: 'Opportunity revenues',
    //       chartArea: { width: '50%' },
    //       colors: ['#00A0E3', '#577D35', '#FFDD00', '#A8DDE0'],
    //       backgroundColor: 'transparent',
    //       isStacked: true,
    //       hAxis: {
    //         title: 'Total Revenue',
    //         minValue: 0,
    //       },
    //       vAxis: {
    //         title: 'Stage',
    //       },
    //       animation: {
    //         duration: 1000,
    //         easing: 'out',
    //         startup: true,
    //       },
    //       legend: { position: 'bottom' }
    //     },
    //   },
    // };
    let result = await this.getAuditTrailStream();
    return Promise.resolve(result);
  }

  /*public async getOpportunityWonToday(): Promise<number> {
    let oppWonToday = 0;
    try {
      let opportunityList: Opportunity[] = await getRepository(Opportunity)
        .createQueryBuilder('opportunity')
        .select('COUNT(*) AS count')
        .where("opportunity.stagename = 'Closed Won'")
        .andWhere("opportunity.closedate = 'TODAY'")
        .getRawMany();

      if (opportunityList.length == 1) {
        oppWonToday = parseInt(opportunityList[0].count);
      }

      return Promise.resolve(oppWonToday);
    } catch (e) {
      // Something went wrong, we're unable to find the requested opportunity
      let message = `Unable to retrieve opportunity won today: ${e.message} \n\n${e.stack}`;
      return Promise.reject(new Error(message));
    }
  }

  public async getOpportunityRevenueWonToday(): Promise<string> {
    let oppRevenueWonToday = 0;
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 0,
    });

    try {
      let opportunityList: Opportunity[] = await getRepository(Opportunity)
        .createQueryBuilder('opportunity')
        .select('SUM(opportunity.amount)', 'revenue')
        .where("opportunity.stagename = 'Closed Won'")
        .andWhere("opportunity.closedate = 'TODAY'")
        .getRawMany();

      if (opportunityList.length == 1 && opportunityList[0].revenue != null) {
        oppRevenueWonToday = opportunityList[0].revenue;
      }

      return Promise.resolve('$' + formatter.format(oppRevenueWonToday));
    } catch (e) {
      // Something went wrong, we're unable to find the requested opportunity
      let message = `Unable to retrieve opportunity revenue won today: ${e.message} \n\n${e.stack}`;
      return Promise.reject(new Error(message));
    }
  }*/

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
