const ACTION_PAGE_TITLE = 'page:setPageTitle';
const ACTION_PAGE_ICON = 'page:setPageIcon';
const ACTION_LOAD_PROFILE = 'page:loadProfile';
const ACTION_SET_PROFILE = 'page:setProfile';
const ACTION_OPEN_DRAWER = 'page:openDrawer';
const ACTION_CLOSE_DRAWER = 'page:closeDrawer';
const ACTION_LOAD_ORDER = 'page:loadOrder';
const ACTION_SET_ORDER = 'page:setOrder';
const ACTION_SET_ORDER_LOADING = 'page:setOrderLoading';

export {
  ACTION_PAGE_TITLE,
  ACTION_PAGE_ICON,
  ACTION_LOAD_PROFILE,
  ACTION_SET_PROFILE,
  ACTION_OPEN_DRAWER,
  ACTION_CLOSE_DRAWER,
  ACTION_LOAD_ORDER,
  ACTION_SET_ORDER,
  ACTION_SET_ORDER_LOADING,
};

export const setPageTitle = title => ({
  type: ACTION_PAGE_TITLE,
  payload: title,
});

export const setPageIcon = icon => ({
  type: ACTION_PAGE_ICON,
  payload: icon,
});

export const setProfile = profile => ({
  type: ACTION_SET_PROFILE,
  payload: profile,
});

export const openDrawer = () => ({
  type: ACTION_OPEN_DRAWER,
});

export const closeDrawer = () => ({
  type: ACTION_CLOSE_DRAWER,
});

export const loadProfile = () => {
  return function(dispatch, getState) {
    fetch('/auth/saml/profile')
      .then(response => response.json())
      .then(responseJson => {
        dispatch(setProfile(responseJson));
      })
      .catch(error => {
        console.error('Failed to load profile', error);
      });
  };
};

export const setOrder = data => ({
  type: ACTION_SET_ORDER,
  payload: data,
});

export const setOrderLoading = loading => ({
  type: ACTION_SET_ORDER_LOADING,
  payload: loading,
});

export const loadOrder = orderId => {
  return function(dispatch, getState) {
    dispatch(setOrderLoading(true));

    fetch('/orders/load/' + orderId)
      .then(response => response.json())
      .then(responseJson => {
        dispatch(setOrder(responseJson));
        dispatch(setOrderLoading(false));
      })
      .catch(error => {
        dispatch(setOrderLoading(false));
        console.error('Failed to load order', error);
      });
  };
};
