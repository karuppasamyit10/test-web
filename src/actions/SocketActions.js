import { myLog } from '../utils/Utility';
import URL from '../utils/URL';
import { PATH } from '../utils/Constants';
import messageSoundFile from  '../utils/assets/message_notify.mp3';
import { Manager } from 'socket.io-client';
import { ACTION_TYPES } from '../utils/Constants';
import store from 'store';  
import _ from 'lodash';
import stores from '../stores';
import {
  NAMESPACE_WEB,  
  CONNECTE, 
  DISCONNECTED, 
  SOCKET_CONNECTED, 
  VIDEO_CALL_CONNECTED, 
  SOCKET_DISCONNECTED, 
  CONNECT_TIMEOUT, 
  WRONG_INFORMATION,
  CONNECT_ERROR, 
  PATIENT_CALL_INITIATION,
  NEW_ONDEMAND_BOOKED,
  NEW_APPOINTMENT_BOOKED,
} from '../utils/SocketConstants';


let socketWeb

export const startWebSocketConnect =(userId, userType)=> {
  return function (dispatch) {    
    myLog('--------------_>>>>>>  socketWeb Connect Start web',userId, userType, isAppConnect); 
    let manager = Manager(URL.API_SERVER_SOCKET_IO_BASE_URL, {
      path: URL.API_SERVER_SOCKET_IO_PATH, 
      autoConnect : true,
      forceNew : true,
      verify : false,
      reconnection: true,
      reconnectionDelay: 1000,
      timeout : 2000,
      query: {
        userId,
        type: userType,
        socketAuthentication,
      },
    });
    socketWeb = manager.socket(NAMESPACE_WEB);
    /**
     * Connected
     */
    socketWeb.on(CONNECTE, (val) => {
      myLog('--------------_>>>>>>   Connected  web', val);
    });

    /**
    * _onDisConnect
    */
    socketWeb.on(DISCONNECTED, (data) => {
      myLog('--------------_>>>>>>   _onDisConnect  web', data);
      isAppConnect = false;
    });

    /**
     * socket connected
     */
    socketWeb.on(SOCKET_CONNECTED, (data) => {
      // props.showNotification('socket connected', 'success');
      isAppConnect = true;
      myLog('--------------_>>>>>>   socket_connected web', data);
    });

    /**
     * `${userType}/${userId}` - Listener
     */
    socketWeb.on(`${userType}/${userId}`, (data) => {
      myLog('--------------_>>>>>>--- web', `${userType}/${userId}`, data);
      if (userType === 'PATIENT') {
        if (data.type === VIDEO_CALL_CONNECTED) {
          if(window.location.href.indexOf(PATH.PATIENT.VIDEO_CALL) === -1 && data.userType==='PATIENT' && _.isEmpty(stores.getState().PushNotificationReducer.pushNotification)){
            dispatch(pushNotification(data.response)); 
          }
          dispatch(connectVideoCall(data.response));
        }
      }        
    });
    /**
     * socket_disconnected
     */
    socketWeb.on(SOCKET_DISCONNECTED, (data) => {
      myLog('--------------_>>>>>>   socket_disconnected web', data);
      isAppConnect = false;
    });
    /**
     * connect error
     */
    socketWeb.on(CONNECT_ERROR, (data) => {
      myLog('--------------_>>>>>>   connect_error web', data);
    });
    /**
     * connect timeout
     */
    socketWeb.on(CONNECT_TIMEOUT, (data) => {
      myLog('--------------_>>>>>>   connect_timeout web', data);
    });
    /**
     * Wrong Information
     */
    socketWeb.on(WRONG_INFORMATION, (data) => {
      myLog('--------------_>>>>>>   Wrong Information web', data);
    });
  };
};

