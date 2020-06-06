import axios from 'axios';
import * as actionTypes from './actionTypes';
import servicesdata from '../../data/services.json';
import providersdata from '../../data/providers.json';

export const fetchAllServicesSuccess = (serviceResponse, providersResponse) => {
  const {data, included} = providersResponse;
  return {
    type: actionTypes.FETCH_ALL_SERVICES_SUCCESS,
    services: serviceResponse,
    providers: data,
    included: included,
  };
};
export const fecthAllServicesFail = error => {
  return {
    type: actionTypes.FETCH_ALL_SERVICES_FAIL,
    error: error,
  };
};

export const fetchAllServicesStart = () => {
  return {
    type: actionTypes.FETCH_ALL_SERVICES_START,
  };
};

export const fetchAllServices = () => {
  return dispatch => {
    //**** Commented below provided API as it was throwing CORS error */
    // const servicesUrl = 'https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services';
    // const providersUrl ='https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10';
    //************************************************** */

    // Added our own dummy API. After executing api,
    const servicesUrl = 'https://jsonplaceholder.typicode.com/posts';
    const providersUrl = 'https://jsonplaceholder.typicode.com/posts';

    dispatch (fetchAllServicesStart ());

    const serviceRequest = axios.get (servicesUrl);
    const providersRequest = axios.get (providersUrl);
    axios
      .all ([serviceRequest, providersRequest])
      .then (
        axios.spread ((...responses) => {
          // const serviceResponse = responses[0].data;   -> This will be uncommented if data receives from api.
          // const providersResponse = responses[1].data; -> This will be uncommented if data receives from api.
          const serviceResponse = servicesdata.data;
          const providersResponse = providersdata;
          dispatch (
            fetchAllServicesSuccess (serviceResponse, providersResponse)
          );
        })
      )
      .catch (error => {
        console.log (error);
        dispatch (fecthAllServicesFail (error));
      });
  };
};
