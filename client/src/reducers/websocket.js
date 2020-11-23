import {
  ACTION_AUDIT_TRAIL
} from '../actions/websocket';

const initialState = {
  dashboardLoaded: false,

  opportunityStatusRevenue: [],
  audittrailHash: '',
  opportunityStatusRevenueLoaded: false,
  opportunityStatusRevenueChart: [],

};

export default function(state = initialState, action) {
  let dataStructure;

  switch (action.type) {
    case ACTION_AUDIT_TRAIL:
      // If the hash is the same, the data is unchanged
      console.log('ACTIONHASH:::'+action.payload.hash);
      console.log('STATEHASH:::'+state.audittrailHash);
      if (action.payload.hash === state.audittrailHash) {
        return state;
      }

      // Hash values do not match, data has changed
      dataStructure = [];
      //dataStructure.push(action.payload.data.data.entities);
      action.payload.data.forEach((item, index) => {
        dataStructure.push(item);
      });

      return Object.assign({}, state, {
        audittrail: dataStructure,
        audittrailLoaded: true,
        audittrailHash: action.payload.hash
      });
    default:
      return state;
  }
}

export const sendNotification = () => {
  return function(dispatch, getState) {
    fetch('/auth/saml/profile')
      .then(response => response.json())
      .then(responseJson => {
        //dispatch(setProfile(responseJson));
        console.log('DONE!');
      })
      .catch(error => {
        console.error('Failed to load profile', error);
      });
  };
};
