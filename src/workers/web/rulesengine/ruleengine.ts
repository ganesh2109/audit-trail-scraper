import { Engine } from 'json-rules-engine'
 
 
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
      operator: 'contains',
      value: 'Changed profile for user ([a-zA-Z\s-])*from ([a-zA-Z\s])*(to System Administrator(_Clone)?)'
    }]
  },
  event: {
    type: 'profile-manual-change',
    params: {
      message: 'Profile manual change'
    }
  }
}
engine.addRule(microsoftRule)

function runRule(facts) {
    engine
        .run(facts)
        .then((results) => {
            console.log(facts.description + ' is a ' + results.events.map(event => event.params.message))
        })
        .catch(err => console.log(err.stack))
}
  