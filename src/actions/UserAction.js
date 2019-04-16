/*************************************************
* webrtc-solution 
* UserAction.js
* @author Karuppasamy // on 09/04/2019
* Copyright © 2019 concertcare. All rights reserved.
*************************************************/
import store from 'store';
import _ from 'lodash';
import { userSessionTimer, userTokenRenewalTimer } from '../utils/AthuService';
import { ACTION_TYPES } from '../utils/Constants';
import Client, { axiosCommonInstance } from '../utils/Client';
// import { clearNotifications } from 'react-notification-system';
import URL from '../utils/URL';
import {myLog} from '../utils/Utility';

/**
 * performs user login
 * @param {String} username 
 * @param {String} password 
 * @param {Function} callBack 
 */
export function logInUser(username, password, callBack) {
  return function (dispatch) {
    const config = {
      method: 'POST',
      headers: {
        'Authorization': 'Basic YXV0aG9yaXplZDphdXRob3JpemVkc2VjcmV0',
        'Content-Type': 'application/form-data',
        'offset': new Date().getTimezoneOffset(),
      },
      url: URL.OATHU,
      params: {
        'grant_type': 'password',
        username,
        password,
      },
    };
    myLog('input', config);
    axiosCommonInstance(config).then((response) => {
      myLog('====logInUser response===::::', response);
      let timeStamp = Math.floor(Date.now() / 1000);
      const expiryObj = { 'expiry_time': timeStamp +response.data.expires_in};
      // add expiry time to result object
      _.assign(response.data, expiryObj);
      store.set('userSession', response.data);
      // scheduleSessionRenewal();
      callBack(response.data);
      dispatch({
        type: ACTION_TYPES.LOGIN_USER,
        payload: response.data,
      });
    }).catch((error) => {
      myLog('====logInUser error===????', error);
      if (error.message.includes('Network Error')) {
        //dispatch(networkProblem(true));
      }else{
        callBack(false);
      }
    });
  };
}

/**
 * To Get Refresh token
 * @param {Function} callBack
 */
export function getRefreshToken(callBack) {
  return function (dispatch) {
    const config = {
      method: 'POST',
      headers: {
        'Authorization': 'Basic YXV0aG9yaXplZDphdXRob3JpemVkc2VjcmV0',
        'Content-Type': 'application/form-data',
        'offset': new Date().getTimezoneOffset(),
      },
      url: URL.OATHU,
      params: {
        'grant_type': 'refresh_token',
        'refresh_token':typeof store.get('userSession') === 'object' ? `${store.get('userSession').refresh_token}` : '',
      },
    };
    myLog('input', config);
    axiosCommonInstance(config).then((response) => {
      myLog('====getRefreshToken response===::::', response);
      let t = new Date();
      const expiryTime = t.setSeconds(t.getSeconds() + 120000);
      const expiryObj = { 'expiry_time': expiryTime };
      // add expiry time to result object
      _.assign(response.data, expiryObj);
      store.set('userSession', response.data);
      // scheduleSessionRenewal();
      callBack(response.data);
    }).catch((error) => {
      myLog('====getRefreshToken error===????', error);
      if (error.message.includes('Network Error')) {
        // dispatch(networkProblem(true));
      }else{
        callBack(false);
      }
    });
  };
}

/**
 * To Register new Patient
 * @param {Object} values 
 * @param {Function} callBack 
 */
export function registerPatient(values, callBack) {
  return function (dispatch) {
    Client.post(URL.PATIENT.REGISTRATION, values, false).then((response) => {
      myLog('====registerPatient response===::::', response);
      callBack(response);
      dispatch({
        type: ACTION_TYPES.PATIENT.REGISTRATION,
        payload: response,
      });
    }).catch((error) => {
      myLog('====registerPatient error===????', error);
      callBack(false);
    });
  };
}


/**
 * To Register new Physician
 * @param {Object} values 
 * @param {Function} callBack 
 */
export function registerPhysician(values, callBack) {
  return function (dispatch) {
    Client.post(URL.PHYSICIAN.REGISTRATION, values, false).then((response) => {
      myLog('====registerPhysician response===::::', response);
      callBack(response);
      dispatch({
        type: ACTION_TYPES.PHYSICIAN.REGISTRATION,
        payload: values,
      });
      dispatch({
        type: ACTION_TYPES.LOGIN_USER,
        payload: response.response,
      });
    }).catch((error) => {
      myLog('====registerPatient error===????', error);
      callBack(false);
    });
  };
}


/**
 * To change user password
 * @param {Object} values 
 * @param {Function} callBack 
 */
export function changePassword(values, callBack) {
  return function (dispatch) {
    Client.put(URL.CHNAGE_PASSWORD, values, true).then((response)=>{
      myLog('====changePassword response===::::', response);
      let result = {};
      if(typeof store.get('userSession') === 'object') {
        result = store.get('userSession');
      }      
      _.assign(result, response);
      myLog('====changePassword change response===::::', result);
      callBack(result);
      dispatch({
        type: ACTION_TYPES.CHANGE_PASSWORD,
        payload: result,
      });
    }).catch((error) => {
      myLog('====changePassword error===????', error);
      callBack(false);
    });
  };
}


/**
 * To Logout user from application
 * @param {Function} callBack 
 */
export function logOutUser(callBack) {
  myLog('logOut');
  return function (dispatch) {
    Client.put(URL.SINGOUT, null, true).then((response)=>{
      myLog('====logOut response===::::', response);
      callBack(response);
      dispatch({
        type: ACTION_TYPES.LOGOUT_USER,
        payload: null,
      });
    }).catch((error) => {
      myLog('====logOut error===????', error);
      callBack(false);
    });
  };
}

export const logout = (callback) => {
  var obj = {
    email : store.get('rememberMe') ? store.get('rememberMe').email : ''
  }
  store.clearAll();
  store.set('rememberMe',obj);
  clearInterval(userSessionTimer);
  clearInterval(userTokenRenewalTimer);
  callback();
  // clearNotifications();
  try {
    // stopWebSocketConnect();
  } catch (error) {
    //
  }
  return { type: ACTION_TYPES.LOGOUT_USER, payload: null };
};

/**
 * To Get user information details
 * @param {Function} callBack
 */
export function getUserInformation(callBack) {
  return function (dispatch) {
    myLog('====get user information ===::::');
    Client.get(URL.GET_USER_INFORMATION, null, true).then((response)=>{
      myLog('====get user information response===::::', response);
      if (response.response_code === 0) {      
        dispatch({
          type: ACTION_TYPES.GET_USER_INFORMATION,
          payload: response.response,
        });
      }
      callBack(response);
    }).catch((error) => {
      myLog('====get user information error===????', error);
      callBack(false);
    });
  };
}

/**
 * Get Countries 
 * @param {*} callBack 
 */
export function getCountries(callBack) {
  return function (dispatch) {
    myLog('====get countries information ===::::');
    Client.get(URL.COUNTRY_INFORMARION, null, false).then((response)=>{
      myLog('====get countries information response===::::', response);
      if (response.response_code === 0) {
        dispatch({
          type: ACTION_TYPES.COUNTRY_INFORMARION,
          payload: response.response,
        });
      }
      callBack(response);
    }).catch((error) => {
      myLog('====get countries information error===????', error);
      callBack(false);
    });
  };
}

/**
 * Get states in provided country
 * @param {Number} countryId 
 * @param {Function} callBack 
 */
export function getStates(countryId, callBack) {
  return function (dispatch) {    
    myLog('====get state information ===::::');
    let params = {
      countryId,
    };
    Client.get(URL.STATE_INFORMARION, params, true).then((response)=>{
      myLog('====get state information response===::::', response);
      // if (response.response_code === 0) {        
      dispatch({
        type: ACTION_TYPES.STATE_INFORMATION,
        payload: response.response,
      });
      // }
      callBack(response);
    }).catch((error) => {
      myLog('====get state information error===????', error);
      callBack(false);
    });
  };
}

/**
 * Get cities in particular state
 * @param {Number} stateId 
 * @param {Function} callBack 
 */
export function getCities(stateId, callBack) {
  return function (dispatch) {    
    myLog('====get city information ===::::');
    let params = {
      stateId,
    };
    Client.get(URL.CITY_INFORMARION, params, true).then((response)=>{
      myLog('====get city information response===::::', response);
      // if (response.response_code === 0) {        
      dispatch({
        type: ACTION_TYPES.CITY_INFORMATION,
        payload: response.response,
      });
      // }
      callBack(response);
    }).catch((error) => {
      myLog('====get city information error===????', error);
      callBack(false);
    });
  };
}

/**
 * Update physician information
 * @param {object} values 
 * @param {Function} callBack 
 */
export function updatePhysician(values, callBack) {
  myLog('====get state information ===::::');
  myLog(values);
  return function (dispatch) {    
    myLog('====get state information ===::::');
    Client.put(URL.PHYSICIAN.UPDATE, values, true).then((response)=>{
      myLog('====update physician response===::::', response);
      if (response.response_code === 0) {        
        dispatch({
          type: ACTION_TYPES.PHYSICIAN.UPDATE,
          payload: response.response,
        });
      }
      callBack(response);
    }).catch((error) => {
      myLog('====update physician error===????', error);
      callBack(false);
    });
  };
}

/**
 * Enroll new physician after successfull registeration
 * @param {Object} values
 * @param {Function} callBack
 */
export function enrollPhysician(values, callBack) {
  myLog('====enroll physician information ===::::');
  myLog(values);
  return function (dispatch) {    
    myLog('====enroll physician information ===::::');
    Client.put(URL.PHYSICIAN.ENROLL, values, true).then((response)=>{
      myLog('====enroll physician response===::::', response);
      if (response.response_code === 0) {        
        dispatch({
          type: ACTION_TYPES.PHYSICIAN.ENROLL,
          payload: response.response,
        });
      }
      callBack(response);
    }).catch((error) => {
      myLog('====enroll physician error===????', error);
      callBack(false);
    });
  };
}

/**
 * Enroll new patient after successfull registeration
 * @param  {Object} values
 * @param {Function} callBack
 */
export function enrollPatient(values, callBack) {
  myLog('====enroll patient information ===::::');
  myLog(values);
  return function (dispatch) {    
    myLog('====enroll patient information ===::::');
    Client.put(URL.PATIENT.ENROLL, values, true).then((response)=>{
      myLog('====enroll patient response===::::', response);
      callBack(response);
    }).catch((error) => {
      myLog('====enroll patient error===????', error);
      callBack(false);
    });
  };
}

/**
 * Verify Email After successfull registeration
 * @param {Object} values 
 * @param {Function} callBack 
 */
export function verifyEmail(values, callBack) {
  return function (dispatch) {
    Client.put(URL.VERIFY_EMAIL, values, true).then((response)=>{
      myLog('====verifyEmail response===::::', response);
      let result = {};
      if(typeof store.get('userSession') === 'object') {
        result = store.get('userSession');
      }      
      _.assign(result, response);
      myLog('====changePassword change response===::::', result);
      callBack(result);
    }).catch((error) => {
      myLog('====changePassword error===????', error);
      callBack(false);
    });
  };
}

/**
 * Get zipcode information
 * @param {Object} values 
 * @param {Function} callBack 
 */
export function getZipInfo(values, callBack) {
  return function (dispatch) {
    Client.getZipInfoApi(values).then((response) => {
      myLog('====get zip information response===::::', response);
      let result = {};
      if(typeof store.get('userSession') === 'object') {
        result = store.get('userSession');
      }    
      let data = {
        cityName: response.places[0]['place name'],
        stateName: response.places[0]['state'],
        stateShortName: response.places[0]['state abbreviation'],
      } ; 
      _.assign(result, data);
      myLog('====get zip information response===::::', result);
      callBack(result);
    }).catch((error) => {
      myLog('====get zip information error===????', error);
      callBack(false);
    });
  };
}

/**
 * Get city information
 * @param {Object} values 
 * @param {Function} callBack 
 */
export function checkCityDetails(values, callBack) {
  myLog('====checkCityDetails information ===::::');
  myLog(values);
  return function (dispatch) {    
    myLog('====checkCityDetails information ===::::');
    Client.get(URL.CHECK_CITY_DETAILS, values, true).then((response)=>{
      myLog('====checkCityDetails response===::::', response);
      if(response.response){
        dispatch({
          type: ACTION_TYPES.CITY_INFORMATION,
          payload: response.response,
        });
      }
      callBack(response);
    }).catch((error) => {
      myLog('====checkCityDetails error===????', error);
      callBack(false);
    });
  };
}

/**
 * Get Expertise list 
 * @param {Function} callBack 
 */
export function getExpertiseList(callBack) {
  return function (dispatch) {
    myLog('====get user information ===::::');
    Client.get(URL.EXPERTISE_INFORMATION, null, true).then((response)=>{
      myLog('====get user information response===::::', response);
      if (response.response_code === 0) {      
        dispatch({
          type: ACTION_TYPES.EXPERTISE_INFORMATION,
          payload: response.response,
        });
      }
      callBack(response);
    }).catch((error) => {
      myLog('====get user information error===????', error);
      callBack(false);
    });
  };
}

/**
 * Submits Contact us Form
 * @param {String} firstName 
 * @param {String} lastName 
 * @param {String} email 
 * @param {String} mobile 
 * @param {String} comment 
 * @param {Function} callBack 
 */
export function updateContactUs(firstName, lastName,email,mobile,
  comment,callBack) {
  let values = {
    firstName, lastName,email,mobile,
    comment,
  };
  return function (dispatch) {
    myLog('====updateContactUs ===::::');
    Client.post(URL.CONTACT_US, values, true).then((response)=>{
      myLog('====updateContactUs response===::::', response);
      if (response.response_code === 0) {      
        dispatch({
          type: ACTION_TYPES.CONTACT_US,
          payload: response.response,
        });
      }
      callBack(response);
    }).catch((error) => {
      myLog('====updateContactUs error===????', error);
      callBack(false);
    });
  };
}

/**
 * Invokes forget password
 * @param {String} emailAddress 
 * @param {Function} callBack 
 */
export function forgetPassword(emailAddress, callBack) {
  let values = {
    emailAddress,
  };
  return function (dispatch) {
    Client.put(URL.FORGET_PASSWORD, values, true).then((response)=>{
      myLog('====forgetPassword response===::::', response);
      let result = {};
      if(typeof store.get('userSession') === 'object') {
        result = store.get('userSession');
      }      
      _.assign(result, response);
      myLog('====forgetPassword change response===::::', result);
      callBack(result);
      dispatch({
        type: ACTION_TYPES.FORGET_PASSWORD,
        payload: result,
      });
    }).catch((error) => {
      myLog('====forgetPassword error===????', error);
      callBack(false);
    });
  };
}
/**
 * Invokes Resend Verification code
 * @param {Function} callBack 
 */
export function reSend(callBack) {
  return function (dispatch) {
    Client.put(URL.RESEND, null, true).then((response)=>{
      myLog('====reSend response===::::', response);
      let result = {};
      if(typeof store.get('userSession') === 'object') {
        result = store.get('userSession');
      }      
      _.assign(result, response);
      myLog('====reSend change response===::::', result);
      callBack(result);
    }).catch((error) => {
      myLog('====reSend error===????', error);
      callBack(false);
    });
  };
}

/**
 * Dispatch an action to see the picture in zoom view
 * @param {String} picture url 
 */
export function showPicure(picture) {
  return function(dispatch){
    dispatch({
      type: ACTION_TYPES.PROFILE_IMAGE,
      payload: picture,
    });
  };
}

/**
 * clears the picture in redux store after closes
 */
export const clearPicure = () =>{
  return function(dispatch){
    dispatch({
      type: ACTION_TYPES.PROFILE_IMAGE,
      payload: null,
    });
  };
};
/**
 * Sends Saas Agreement to email
 * @param {Function} callBack 
 */
export function sendSaas(callBack) {
  return function (dispatch) {
    Client.get(URL.SEND_SAAS, null, true).then((response)=>{
      callBack(response);
    }).catch((error) => {
      callBack(false);
    });
  };
}

/**
 * Get facility detail
 * @param {Function} callBack 
 */
export function getFacilityDetail(callBack) {
  return function (dispatch) {    
    myLog('====get facility information ===::::');
    // let params = {
    //   isFacility,
    // };
    Client.get(URL.PHYSICIAN.FACILITY_DETAIL, null, true).then((response)=>{
      myLog('====get facility information response===::::', response);
      // if (response.response_code === 0) {        
      // dispatch({
      //   type: ACTION_TYPES.STATE_INFORMATION,
      //   payload: response.response,
      // });
      // }
      callBack(response);
    }).catch((error) => {
      myLog('====get facility information error===????', error);
      callBack(false);
    });
  };
}

/**
 * Get financial report
 * @param {Function} callBack 
 */
export function getFinancialReportDetail(callBack) {
  return function (dispatch) {    
    myLog('====get financial report information ===::::');
    // let params = {
    //   isFacility,
    // };
    Client.get(URL.PHYSICIAN.FINANCIAL_REPORT, null, true).then((response)=>{
      myLog('====get financial report information response===::::', response);
      // if (response.response_code === 0) {        
      // dispatch({
      //   type: ACTION_TYPES.STATE_INFORMATION,
      //   payload: response.response,
      // });
      // }
      callBack(response);
    }).catch((error) => {
      myLog('====get financial report information error===????', error);
      callBack(false);
    });
  };
}
