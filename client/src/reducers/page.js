import {
  ACTION_PAGE_TITLE,
  ACTION_PAGE_ICON,
  ACTION_SET_PROFILE,
  ACTION_OPEN_DRAWER,
  ACTION_CLOSE_DRAWER,
  ACTION_SET_ORDER,
  ACTION_SET_ORDER_LOADING,
} from '../actions/page';

const initState = {
  title: 'Dashboard',
  icon: 'dashboard',
  profile: { profilepic: '/images/avatar.png' },
  drawerOpen: true,
  order: {},
  orderLoaded: false,
};

const pageReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_PAGE_TITLE:
      return Object.assign({}, state, { title: action.payload });
    case ACTION_PAGE_ICON:
      return Object.assign({}, state, { icon: action.payload });
    case ACTION_SET_PROFILE:
      return Object.assign({}, state, { profile: action.payload });
    case ACTION_OPEN_DRAWER:
      return Object.assign({}, state, { drawerOpen: true });
    case ACTION_CLOSE_DRAWER:
      return Object.assign({}, state, { drawerOpen: false });
    case ACTION_SET_ORDER:
      return Object.assign({}, state, { order: action.payload });
    case ACTION_SET_ORDER_LOADING:
      return Object.assign({}, state, { orderLoaded: !action.payload });
    default:
      return state;
  }
};

export default pageReducer;
