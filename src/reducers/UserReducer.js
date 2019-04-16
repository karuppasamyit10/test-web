/*************************************************
* webrtc-solution 
* UserReducer.js
* @author Karuppasamy // on 09/04/2019
* Copyright © 2019 concertcare. All rights reserved.
*************************************************/

import { ACTION_TYPES } from '../utils/Constants';
let initialState = {
  oauthUserDetails :{},
  userRegisterDetails:{},
  userDetails:{},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.USER.LOGIN_USER:
      return {
        ...state,
        oauthUserDetails: action.payload,
      };

    case ACTION_TYPES.USER.LOGOUT_USER:
      return null;

    case ACTION_TYPES.USER.REGISTRATION:
      return {
        ...state,
        userRegisterDetails: action.payload,
      };

    case ACTION_TYPES.USER.GET_USER_INFORMATION:
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      break;
  }
  return state;
};
export default UserReducer;

