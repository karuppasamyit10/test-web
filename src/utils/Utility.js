/*************************************************
* webrtc-solution 
* Utility.js
* @author Karuppasamy // on 08/04/2019
* Copyright © 2019 concertcare. All rights reserved.
*************************************************/


import { isDevelopment } from './URL';

// import store from 'store';  
// import {logout} from '../actions/UserAction';
// import _ from 'lodash';

export function myInfoLog(...messgae) {
  if (isDevelopment) {  
     console.log(...messgae);  
  }  
}

export function myErrorLog(...messgae) {
  if (isDevelopment) {  
     console.error(...messgae);  
  }  
}

export function myLog(...messgae) {
  if (isDevelopment) {  
     console.log(...messgae);  
  }  
}

export function encryptBase64(data) {
   //return encode(data)
}

export const ValidURL =(str) =>{ 
  let regex=/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\\/]))?/;
  if(!regex.test(str)){
    return false;
  } else {
    return true;
  }
};

export const isValidUser =(props)=>{
  // if (_.has(props.match.params,'userId') && _.has(store.get('userSession').userDetails,'userId')) {
  //   if (parseInt(store.get('userSession').userDetails.userId) !==  parseInt(props.match.params.userId) ) {
  //     logout((e) => {
  //       alert('Invalid Session');
  //       window.location.href='/';
  //     });
  //   }
  // }else{
  //   logout((e) => {
  //     alert('Invalid Session');
  //     window.location.href='/';
  //   });
  // }
};
