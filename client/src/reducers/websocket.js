import {
  ACTION_ADMIN_LOGINS
} from '../actions/websocket';

const initialState = {
  dashboardLoaded: false,

  opportunityStatusRevenue: [],
  opportunityStatusRevenueHash: '',
  opportunityStatusRevenueLoaded: false,
  opportunityStatusRevenueChart: [],

};

export default function(state = initialState, action) {
  let dataStructure;

  switch (action.type) {
    case ACTION_ADMIN_LOGINS:
      // If the hash is the same, the data is unchanged
      if (action.payload.hash === state.opportunityStatusRevenueHash) {
        return state;
      }

      // Hash values do not match, data has changed
      dataStructure = [];
      dataStructure.push(action.payload.data.data.entities);
      action.payload.data.data.values.forEach((item, index) => {
        dataStructure.push(item);
      });

      return Object.assign({}, state, {
        opportunityStatusRevenue: dataStructure,
        opportunityStatusRevenueLoaded: true,
        opportunityStatusRevenueHash: action.payload.hash,
        opportunityStatusRevenueChart: action.payload.data.meta,
      });
    default:
      return state;
  }
}