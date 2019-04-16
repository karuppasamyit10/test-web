/*************************************************
* CareonTel 
* stores.js
* @author Krishnamani // on 26/07/2018
* Copyright © 2018 concertcare. All rights reserved.
*************************************************/

import {createStore , applyMiddleware} from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default createStore( rootReducer ,{},applyMiddleware(thunk));