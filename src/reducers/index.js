/*************************************************
* webrtc-solution 
* rootReducer as index.js
* @author Karuppasamy // on 09/04/2019
* Copyright © 2019 concertcare. All rights reserved.
*************************************************/

import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import CommonReducer from './CommonReducer';

const rootReducer = combineReducers({
  UserReducer,
  CommonReducer
});

export default rootReducer;