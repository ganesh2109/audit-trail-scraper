import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import pageReducer from './page';
import websocketReducer from './websocket';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  page: pageReducer,
  websocket: websocketReducer,
})

export default rootReducer