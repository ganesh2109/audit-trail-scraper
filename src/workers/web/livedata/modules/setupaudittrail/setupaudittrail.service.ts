import { Injectable, Logger, HttpService } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Engine } from 'json-rules-engine';
import { Repository, getRepository } from 'typeorm';
import { SetupAuditTrail } from '../../../../../database/entities/setupaudittrail.entity';

@Injectable()
export class SetupAuditTrailService {
  public constructor(
    private readonly httpService: HttpService,
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
          var setupaudittrailjson = {'description' : 'Changed profile for user TEST from Portal to System Administrator'};
          runRule(setupaudittrailjson);
          let val = [item.createdbyid, item.action, item.display, item.createddate, item.section, item.delegateuser];
          auditTrailStream.push(val);
        });
          
      //const response = await this.httpService.post('https://outlook.office.com/webhook/d39c830e-86a0-482f-86f8-d1179598b160@36da45f1-dd2c-4d1f-af13-5abe46b99921/IncomingWebhook/9be5daae426c4c369ff1054abcb629f1/361fc202-813c-4af8-a5c2-b2d5dea4e028','{"text":"Hello World"}').toPromise();
      //console.log('RESPONSE:::::'+response);
      return Promise.resolve(auditTrailStream);
    } catch (e) {
      // Something went wrong, we're unable to find the requested opportunity
      let message = `Unable to retrieve all audit trails: ${e.message} \n\n${e.stack}`;
      return Promise.reject(new Error(message));
    }
  }

  public async sendNotification(message){
      runRule(message);
  } 
}


  /**
 * Setup a new engine
 */
let engine = new Engine()
 
/**
 * Rule for identifying microsoft employees taking pto on christmas
 *
 * the account-information fact returns:
 *  { company: 'XYZ', status: 'ABC', ptoDaysTaken: ['YYYY-MM-DD', 'YYYY-MM-DD'] }
 */
let microsoftRule = {
  conditions: {
    all: [{
      fact: 'description',
      operator: 'matches',
      value: 'Changed profile for user ([a-zA-Z0-9])* from ([a-zA-Z0-9])* to System Administrator'
    }]
  },
  event: {
    type: 'profile-manual-change',
    params: {
      message: 'Profile manual change'
    }
  }
}
engine.addRule(microsoftRule);
engine.addOperator('matches', (factValue: string, jsonValue: string) => {
  //console.log('FACTVALUE:::'+factValue+'    jsonvalue:::'+jsonValue);
  const regex = RegExp(jsonValue);
  return regex.test(factValue);
})

function runRule(facts) {
    engine
        .run(facts)
        .then((results) => {
          //const response = await this.httpService.post('https://outlook.office.com/webhook/d39c830e-86a0-482f-86f8-d1179598b160@36da45f1-dd2c-4d1f-af13-5abe46b99921/IncomingWebhook/9be5daae426c4c369ff1054abcb629f1/361fc202-813c-4af8-a5c2-b2d5dea4e028','{"text":"Hello World"}').toPromise();
          //console.log('RESPONSE:::::'+response);

          //console.log('results::::'+JSON.stringify(results));
          //console.log(facts.description + ' is a ' + results.events.map(event => event.params.message))
        })
        .catch(err => console.log(err.stack))
}
