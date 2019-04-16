/*************************************************
* webrtc-solution 
* Constants.js
* @author Karuppasamy // on 09/04/2019
* Copyright © 2019 concertcare. All rights reserved.
*************************************************/

module.exports = {
  HTTP_CODE: {
    SUCCESS : 200,
    INSERT_SUCESS: 201,
    AUTHENTICATION_FAILURE : 401,
    REQUIRED_MISSING : 403,
    REQUEST_TIMED_OUT_FAILURE : 500,
    INPUT_VALIDATION_ERROR :400,
    NO_DATA_FOUND:404,
  },
  COLOR:{
    THEME: '#5ec3e3', 
  },
  ACTION_TYPES: {
    USER: {
      LOGIN_USER: 'LOGIN_USER',
      LOGOUT_USER: 'LOGOUT_USER',   
      FORGET_PASSWORD: 'FORGET_PASSWORD',
      CHANGE_PASSWORD:'CHANGE_PASSWORD',
      UPDATE_PROFILE:'UPDATE_PROFILE',
      REGISTRATION: 'REGISTRATION',
      GET_USER_INFORMATION: 'GET_USER_INFORMATION',
      SHOW_NOTIFICATION: 'SHOW_NOTIFICATION',
      CLEAR_NOTIFICATION : 'CLEAR_NOTIFICATION',
    },
    ROOM: {
    GET_ROOM_INFORMATION: 'GET_ROOM_INFORMATION',
    }    
  },

  PATH: {
    INDEX: '/',
    SIGNIN:'/sign-in',
    SIGNUP:'/sign-up',
    FORGET_PASSWORD: '/forget-password',
    CHANGE_PASSWORD:'/change-password',
    SIMPLE_DEMO: '/video-demo',
    LEARN_REACT: '/learn-react',
  },
  VALIDATION_MSG:{
    REQ_FAILED: 'Request failed.',
    AUTH_FAILED: 'The username and password you entered does not match.',
    NO_INTERNET: 'Please Check Your Internet connection',
    NO_DATA_FOUND: 'Could not fetch data from the server',
  },
  MESSAGE:{
    STATUS_CODE_401_ERROR :'Authentication credentials were expired, Press OK for login',
  },
  ALERT:{
    TITLE: {
      APP_NAME : 'webrtc-solution',
      INFO: 'webrtc-solution',
      ERROR: 'webrtc-solution',
      FAILED: 'webrtc-solution',
      SUCCESS: 'webrtc-solution',
      AUTH_FAILED: 'Authentication Failure',
      CALL_FAILED: 'Could Not Make Call',
      WENT_WRONG: 'Sorry, something went wrong',
      EXPIRED: 'Logout',
      EMAIL_FAILED: 'Could Not Send Email',
      BROWSER_FAILED: 'Could Not Open Browser',
    },
  },
};