import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../common/utility';

const initialState = {
  services: [],
  providers: [],
  included: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_SERVICES_START:
      return fetchAllServicesStart (state, action);
    case actionTypes.FETCH_ALL_SERVICES_SUCCESS:
      return fetchAllServicesSuccess (state, action);
    case actionTypes.FETCH_ALL_SERVICES_FAIL:
      return fecthAllServicesFail (state, action);
    default:
      return state;
  }
};

export const fetchAllServicesStart = (state, action) => {
  return updateObject (state, {error: null, loading: true});
};
export const fetchAllServicesSuccess = (state, action) => {
  return updateObject (state, {
    services: action.services,
    providers: action.providers,
    included: action.included,
    loading: false,
  });
};
export const fecthAllServicesFail = (state, action) => {
  return updateObject (state, {
    error: action.error,
    loading: false,
  });
};

export default reducer;
