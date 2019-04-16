/*************************************************
* CareonTel 
* AthuService.js
* @author Krishnamani // on 26/07/2018
* Copyright © 2018 concertcare. All rights reserved.
*************************************************/

import { logout } from '../actions/UserAction';
import { myLog } from './Utility';
import store from 'store';  
import stores from '../stores';
export let userSessionTimer;
export let userTokenRenewalTimer;
let isSession = true;


export const isLoggedIn = () =>{
  if(typeof store.get('userSession') === 'object') {
    let timeStamp = Math.floor(Date.now() / 1000);
    // check token expiry time
    // checkWebConnect();
    if(store.get('userSession').expiry_time < timeStamp) {
      return false;
    }
    else {
      // start scheduleSessionRenewal timer if its not started
      if(! userSessionTimer) {
        scheduleSessionRenewal();
      }
      // start userTokenRenewalTimer timer if its not started
      if(! userTokenRenewalTimer) {
        tokenRenewalTimeout();
      }
    }
    
    return true;
  }
  // if userSession object is not present return false
  return false;
};

// logout user when user is not active for 30 mins
export const scheduleSessionRenewal = () => {
  let sessionTime = 0;
  userSessionTimer = setInterval(() => {
    sessionTime++;
    // logout user when session expires
    if(sessionTime > 2700) {
      logout(()=> {
        alert('Session timeout');
        window.location.href='/';
      } );
    }
  }, 1000);
};

// timer to check the access token validity and renew token before it expires
export const tokenRenewalTimeout = () => {  
  userTokenRenewalTimer = setInterval(() => {
    let currentDate = new Date();
    // myLog('currentDate.getSeconds()',store.get('userSession').expiry_time, currentDate.getTime());
    if(store.get('userSession').expiry_time < (currentDate.getTime())) {  
    //   getRefreshToken((response)=>{
    //     if (!response) {
    //       logout(()=> {
    //         alert('Session timeout');
    //         window.location.href='/';
    //       } );
    //     }

    //   });
    }
  }, 1000);
};
  
export const claerTimOutInterval =()=>{
  isSession = false;
};

export const resetTimeOutInterval = () =>{
  myLog('resetTimeOutInterval');
  isSession = true;
  myLog('resetTimeOutInterval ', isSession);
};

export const restartInterval = () => {  
  // myLog('restartInterval');
  clearInterval(userSessionTimer);
  if (isSession) {
    scheduleSessionRenewal();
  }
};
  

const keyDownTextField = (e) => {
  // myLog('keyDownTextField');
  if(isLoggedIn()) {
    restartInterval();
  }
};

function keyDownEvent(e) {
  // myLog('keyDownEvent');

  if(isLoggedIn()) {
    restartInterval();
  }
}

function mouseMoveEvent(e) {
  // myLog('mouseMoveEvent');
  if(isLoggedIn()) {
    restartInterval();
  }
}


// Listen to user keypress and reset timer
document.addEventListener('keypress', keyDownTextField, false);

// Listen to user keypress and reset timer
document.addEventListener('keypress', keyDownEvent, false);

// Listen to user keypress and reset timer
document.addEventListener('mousemove', mouseMoveEvent, false);

window.addEventListener('offline', (e) =>{
  myLog('offline'); 
  // stores.dispatch(networkChanged(false));
});

window.addEventListener('online', (e)=>{ 
  myLog('online'); 
  // stores.dispatch(networkChanged(true));
});
