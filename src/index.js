/*************************************************
* webrtc-solution 
* index.js
* @author Karuppasamy // on 08/04/2019
* Copyright © 2019 concertcare. All rights reserved.
*************************************************/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import stores from './stores';  
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { PATH } from './utils/Constants';

import './utils/css/fontawesome-all.min.css';
import './utils/css/bootstrap.min.css';
import './utils/css/style.css';
import './utils/css/dev.css';

//Components
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Meeting from './components/Meeting';
import ForgetPassword from './components/ForgetPassword';
import ChangePassword from './components/ChangePassword';
import Parent from './components/learn-react/ParenToChild/Learning';
import TestVideo from './components/learn-react/VideoWork/TestVideo';


ReactDOM.render(
  <Provider store={stores}>
      <Router>
          <Switch>
            {/* <Route exact path={PATH.INDEX} component={Public} /> */}
            <Route exact path={PATH.INDEX} component={Home} />
            <Route exact path={PATH.SIGNIN} component={SignIn} />
            <Route exact path={PATH.SIGNUP} component={SignUp} />      
            <Route exact path={PATH.FORGET_PASSWORD} component={ForgetPassword} />
            <Route exact path={PATH.CHANGE_PASSWORD} component={ChangePassword} />  
            <Route exact path={PATH.SIMPLE_DEMO} component={TestVideo} />    
            <Route exact path={PATH.LEARN_REACT} component={Parent} />    
            <Route exact path="/:roomName" component={Meeting} />
          </Switch>
      </Router>
  </Provider>
  , document.getElementById('root'));

