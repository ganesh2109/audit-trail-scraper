import { Injectable, Logger, HttpService } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Engine } from 'json-rules-engine';
import { Repository, getRepository } from 'typeorm';
import { SetupAuditTrail } from '../../../../../database/entities/setupaudittrail.entity';
let engine = new Engine();

let audittrailrule = {
  conditions: {
    
    any: [
    {
      fact: 'description',
      operator: 'matches',
      value: 'Changed profile for user ([a-zA-Z0-9\\s])* from ([a-zA-Z0-9\\s])* to ([a-zA-Z0-9\\s])*'
    },
    {
      fact: 'section',
      operator: 'equal',
      value: 'Password Policies'
    },
    {
      fact: 'section',
      operator: 'equal',
      value: 'Session Settings'
    },
    {
      fact: 'section',
      operator: 'equal',
      value: '	Named Credentials'
    }
  ]
  },
  event: {
    type: 'profile-manual-change',
    params: {
      message: 'Unauthorized Manual Change Detected'
    }
  }
}
engine.addRule(audittrailrule);
engine.addOperator('matches', (factValue: string, jsonValue: string) => {
  //console.log('FACTVALUE:::'+factValue+'    jsonvalue:::'+jsonValue);
  const regex = RegExp(jsonValue);
  return regex.test(factValue);
})

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
    let selectFieldArray: string[] = [ 'id', 'createdbyid','action', 'display', 'createddate', 'section', 'delegateuser' ];
    
    try {
      let setupaudittrailList: SetupAuditTrail[] = await getRepository(SetupAuditTrail)
        .createQueryBuilder('setupaudittrail')
        .select(selectFieldArray)
        .orderBy('id', 'DESC')
        .getRawMany();
        let latest = '';
        setupaudittrailList.forEach((item, index) => {
          if(index == 0){
            latest = item.id;
          }
          
          let val = [item.createdbyid, item.action, item.display, item.createddate, item.section, item.delegateuser];
          auditTrailStream.push(val);
        });
        let latestaudittrails: SetupAuditTrail[] = await getRepository(SetupAuditTrail)
        .createQueryBuilder('setupaudittrail')
        .select(selectFieldArray).where('id > '+ cache.get('latestid'))
        .orderBy('createddate', 'DESC')
        .getRawMany();
        console.log('LATEST:::'+JSON.stringify(latestaudittrails));
        cache.put('latestid', latest);
        console.log('CACHE:::'+cache.get('latestid'));
        latestaudittrails.forEach((item, index) => {
          let obj = {"description": item.display, "createdby": item.createdbyid, "section": item.section, "action": item.action};
          
          this.runRule(obj);
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
      this.runRule(message);
  }

    
  
  /**
   * Rule for identifying microsoft employees taking pto on christmas
   *
   * the account-information fact returns:
   *  { company: 'XYZ', status: 'ABC', ptoDaysTaken: ['YYYY-MM-DD', 'YYYY-MM-DD'] }
   */
  

  public async runRule(facts) {
    //let objRules = {"description": facts.description};
    engine
          .run(facts)
          .then(async (results) => {
            console.log('RESPONSE:::::'+JSON.stringify(results));
            console.log('FACTS::::'+facts.description);
            let summary = results.events.map(event => event.params.message);
            console.log('SUMMARY:::'+summary);
              var jsonMessage = `{
                "@type": "MessageCard",
                "@context": "http://schema.org/extensions",
                "themeColor": "0076D7",
                "summary": "${facts.description}",
                "sections": [{
                    "activityTitle": "${facts.description}",
                    "activitySubtitle": "${summary}",
                    "activityImage": "https://teamsnodesample.azurewebsites.net/static/img/image5.png",
                    "facts": [{
                        "name": "Done by",
                        "value": "${facts.createdby}"
                    }, {
                        "name": "Section",
                        "value": "${facts.section}"
                    }, {
                        "name": "Action",
                        "value": "${facts.action}"
                    }],
                    "markdown": true
                }],
              }`;
              const response = await this.httpService.post('https://outlook.office.com/webhook/d39c830e-86a0-482f-86f8-d1179598b160@36da45f1-dd2c-4d1f-af13-5abe46b99921/IncomingWebhook/9be5daae426c4c369ff1054abcb629f1/361fc202-813c-4af8-a5c2-b2d5dea4e028',
               jsonMessage).toPromise();
            //console.log('results::::'+JSON.stringify(results));
            //console.log(facts.description + ' is a ' + results.events.map(event => event.params.message))
          })
          .catch(err => console.log(err.stack))
}

}


  /**
 * Setup a new engine
 */

var cache = require('memory-cache');

