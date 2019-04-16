/*************************************************
* webrtc-solution 
* Client.js
* @author Karuppasamy // on 09/04/2019
* Copyright © 2019 concertcare. All rights reserved.
*************************************************/
import URL from './URL';
import axios from 'axios';
import store from 'store';
import Constants from './Constants';
import { myLog } from './Utility';
import {logout} from '../actions/UserAction';
import { confirmAlert } from 'react-confirm-alert';

export const axiosCommonInstance = axios.create({
  baseURL: URL.API_SERVER_BASE_URL,
});

export const axiosCommon = axios.create({
  baseURL: URL.API_SERVER_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': typeof store.get('userSession') === 'object' ? `${store.get('userSession').token_type} ${store.get('userSession').access_token}` : '',
  },
});

export default class Client {

  static httpHeader(isAccessToken) {
    let d = new Date();
    let headers = {};
    headers = {
      'Content-Type': 'application/json',
      'offset': d.getTimezoneOffset(),
    };
    if (isAccessToken) {
      headers = {
        'Content-Type': 'application/json',
        'offset': d.getTimezoneOffset(),
        'Authorization': typeof store.get('userSession') === 'object' ? `${store.get('userSession').token_type} ${store.get('userSession').access_token}` : '',
      };
    }
    // stores.dispatch(networkProblem(false));
    
    return headers;
  }



  static get(url, params, isAccessToken) {
    return new Promise(function (success, failed) {
      const config = {
        method: 'GET',
        url,
        params,
        headers: Client.httpHeader(isAccessToken),
      };

      myLog('GET ::::::: INPUT', config);
      axios.create({
        baseURL: URL.API_SERVER_BASE_URL,
      })(config)
        .then(
          (response) => {
            try {
              if (response.status === Constants.HTTP_CODE.AUTHENTICATION_FAILURE || response.status === Constants.HTTP_CODE.REQUIRED_MISSING) {
                throw new Error({ name: response.status, message: Constants.VALIDATION_MSG.AUTH_FAILED });
              }
              if (response.status === Constants.HTTP_CODE.SUCCESS) {
                try {
                  return response.data;
                } catch (e) {
                  throw new Error({ name: response.status, message: Constants.VALIDATION_MSG.REQ_FAILED });
                }
              }
            } catch (e) {
              throw new Error({ name: response.status, message: Constants.VALIDATION_MSG.REQ_FAILED });
            }
          }).then((response) => {
          myLog('GET ::::::: resounse', response);
          success(response);
        }).catch((err) => {
          myLog('GET ::::::: err', err);
          failed(CatchErrorHandler(err.message));
        });

    });
  }

  static DELETE(url, params, isAccessToken) {
    return new Promise(function (success, failed) {
      const config = {
        method: 'DELETE',
        url,
        params,
        headers: Client.httpHeader(isAccessToken),
      };

      myLog('GET ::::::: INPUT', config);
      axios.create({
        baseURL: URL.API_SERVER_BASE_URL,
      })(config)
        .then(
          (response) => {
            try {
              if (response.status === Constants.HTTP_CODE.AUTHENTICATION_FAILURE || response.status === Constants.HTTP_CODE.REQUIRED_MISSING) {
                throw new Error({ name: response.status, message: Constants.VALIDATION_MSG.AUTH_FAILED });
              }
              if (response.status === Constants.HTTP_CODE.SUCCESS) {
                try {
                  return response.data;
                } catch (e) {
                  throw new Error({ name: response.status, message: Constants.VALIDATION_MSG.REQ_FAILED });
                }
              }
            } catch (e) {
              throw new Error({ name: response.status, message: Constants.VALIDATION_MSG.REQ_FAILED });
            }
          }).then((response) => {
          myLog('GET ::::::: resounse', response);
          success(response);
        }).catch((err) => {
          myLog('GET ::::::: err', err);
          failed(CatchErrorHandler(err.message));
        });
    });
  }

  static post(url, data, isAccessToken) {
    return new Promise(function (success, failed) {
      const config = {
        method: 'POST',
        url,
        data,
        headers: Client.httpHeader(isAccessToken),
      };
      myLog('POST ::::: Input', config);
      axios.create({
        baseURL: URL.API_SERVER_BASE_URL,
      })(config)
        .then(
          (response) => {
            try {
              if (response.status === Constants.HTTP_CODE.AUTHENTICATION_FAILURE || response.status === Constants.HTTP_CODE.REQUIRED_MISSING) {
                throw new Error({ name: response.status, message: Constants.VALIDATION_MSG.AUTH_FAILED });
              }
              if (response.status === Constants.HTTP_CODE.SUCCESS) {
                try {
                  return response.data;
                } catch (e) {
                  throw new Error({ name: response.status, message: Constants.VALIDATION_MSG.REQ_FAILED });
                }
              }
            } catch (e) {
              throw new Error({ name: response.status, message: Constants.VALIDATION_MSG.REQ_FAILED });
            }

          }).then((response) => {
          myLog('POST ::::::: resounse', response);
          success(response);
        }).catch((err) => {
          myLog('POST ::::::: err', err);
          failed(CatchErrorHandler(err.message));
        });

    });
  }
  static put(url, data, isAccessToken) {
    return new Promise(function (success, failed) {
      const config = {
        method: 'PUT',
        url,
        data,
        headers: Client.httpHeader(isAccessToken),
      };
      myLog('PUT ::::::: INPUT', config);
      axios.create({
        baseURL:URL.API_SERVER_BASE_URL,
      })(config)
        .then(
          (response) => {
            myLog(response);
            try {
              if (response.status === Constants.HTTP_CODE.AUTHENTICATION_FAILURE || response.status === Constants.HTTP_CODE.REQUIRED_MISSING) {
                throw new Error({ name: response.status, message: Constants.VALIDATION_MSG.AUTH_FAILED });
              }
              if (response.status === Constants.HTTP_CODE.SUCCESS) {
                try {
                  return response.data;
                } catch (e) {
                  throw new Error({ name: response.status, message: Constants.VALIDATION_MSG.REQ_FAILED });
                }
              }
            } catch (e) {
              throw new Error({ name: response.status, message: Constants.VALIDATION_MSG.REQ_FAILED });
            }
          }).then((response) => {
          myLog('PUT ::::::: resounse', response);
          success(response);
        }).catch((err) => {
          myLog('PUT ::::::: err', err);
          failed(CatchErrorHandler(err.message));
        });

    });
  }

  static getZipInfoApi(values) {
    myLog('values', values.countryZipShortName);
    return new Promise(function (success, failed) {
      axios.get(`${URL.ZIP_CODE_API_URL + values.countryZipShortName}/${values.zip}`).then(function(response){
      // axios.get(URL.ZIP_CODE_API_URL + values.zip).then(function(response){
        myLog(response.data);
        return response.data;
      }).then((response) => {
        myLog('GET ::::::: resounse', response);
        success(response);
      }).catch((err) => {
        myLog('GET ::::::: err', err);
        failed(err);
      });
    });
  }
}


/**
 * 
 * @param {*} error 
 */
function CatchErrorHandler(error){
  if (error.includes(Constants.VALIDATION_MSG.NO_INTERNET)) {
    return { status: Constants.NO_INTERNET, message: Constants.VALIDATION_MSG.NO_INTERNET };
  }
  if (error.includes(Constants.HTTP_CODE.AUTHENTICATION_FAILURE )) {
    logout((e) => {
      confirmAlert({
        title: Constants.ALERT.TITLE.APP_NAME,
        message: Constants.MESSAGE.STATUS_CODE_401_ERROR,
        buttons: [
          {
            label: 'ok',
            onClick: () =>  window.location.href='/',
          },
        ],
      });
      // alert(Constants.MESSAGE.STATUS_CODE_401_ERROR);
      // window.location.href='/';
    });
    return;
  }
  if (error.includes(Constants.HTTP_CODE.INPUT_VALIDATION_ERROR )) {
    return { status: Constants.HTTP_CODE.INPUT_VALIDATION_ERROR, message: Constants.VALIDATION_MSG.AUTH_FAILED };
  }
  if (error.includes(Constants.HTTP_CODE.REQUIRED_MISSING )) {
    return { status: Constants.HTTP_CODE.REQUIRED_MISSING, message: Constants.VALIDATION_MSG.AUTH_FAILED };
  }
  if (error.includes(Constants.HTTP_CODE.REQUEST_TIMED_OUT_FAILURE )) {
    return { status: Constants.HTTP_CODE.REQUEST_TIMED_OUT_FAILURE, message: Constants.VALIDATION_MSG.REQ_FAILED };
  }
  if (error.includes(Constants.HTTP_CODE.NO_DATA_FOUND )) {
    return { status: Constants.HTTP_CODE.NO_DATA_FOUND, message: Constants.VALIDATION_MSG.NO_DATA_FOUND };
  }
  if (error.includes('Network Error')) {
    // stores.dispatch(networkProblem(true));
    return { status: Constants.HTTP_CODE.REQUEST_TIMED_OUT_FAILURE, message: Constants.VALIDATION_MSG.REQ_FAILED };
  }
  return { status: Constants.HTTP_CODE.REQUEST_TIMED_OUT_FAILURE, message: Constants.VALIDATION_MSG.REQ_FAILED };
}