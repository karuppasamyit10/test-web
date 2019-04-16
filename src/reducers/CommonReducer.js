/*************************************************
* webrtc-solution 
* CommonReducer.js
* @author Karuppasamy // on 09/04/2019
* Copyright © 2019 concertcare. All rights reserved.
*************************************************/

import { ACTION_TYPES } from '../utils/Constants';
let initialState = {
  roomDetails:{},
};

const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
     case ACTION_TYPES.ROOM.GET_ROOM_INFORMATION:
      return {
        ...state,
        roomDetails: action.payload,
      };
    default:
      break;
  }
  return state;
};
export default CommonReducer;