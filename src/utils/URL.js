/*************************************************
* webrtc-solution 
* URL.js
* @author Karuppasamy // on 08/04/2019
* Copyright © 2019 concertcare. All rights reserved.
*************************************************/

const configUrl = {
  OATHU: 'oauth/token',
  SINGOUT:'api/user/signout',
  CHNAGE_PASSWORD:'api/user/password/change',
  FORGET_PASSWORD: '/api/common/password/forget',
  
  GET_USER_INFORMATION: 'api/user/get',
  GET_API_SERVER_STATUS: 'api/public/get/ping',
  GET_STREAM_SERVER_STATUS: 'stream/get/ping',
  
  GET_ROOM_INFORMATION_BY_ROOMNAME: '/api/meeting/get/roomInfo',
};

configUrl['isDevelopment'] = true;
configUrl['isChat'] = 'audio-video-file-chat-demo';

//Local Development Server Configuration
if(window.location.hostname === 'localhost' || window.location.hostname === '192.168.1.109')
{
  let apiBaseUrl = 'https://local-webrtc.careconnectclinic.com';
  let streamBaseUrl = 'https://dev-manipal.careconnectclinic.com';
  // configUrl['API_SERVER_BASE_URL'] = apiBaseUrl+'/webrtc-solution/';
  configUrl['API_SERVER_BASE_URL'] = apiBaseUrl+'/';
  configUrl['API_SERVER_SOCKET_IO_BASE_URL']  = apiBaseUrl+':7171';
  configUrl['API_SERVER_SOCKET_IO_PATH']  = '/webrtc-solution-socket';
  configUrl['STREAM_SERVER_BASE_URL'] = streamBaseUrl+':8443/';
  
}
module.exports = configUrl;