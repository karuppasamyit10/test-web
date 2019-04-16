/*************************************************
 * CareonTel
 * SocketConstants.js
 * @author Krishnamani Sivakumar // on 98/069/2018
 * Copyright © 2018 ConcertCare. All rights reserved.
 *************************************************/

// PATH
export const SOCKET_PATH = '/webrtc-api-socket-server';

//Namespace(nsp) for web
export const NAMESPACE_WEB = '/web';
//Namespace(nsp) for chat
export const NAMESPACE_CHAT = '/chat';

/**
 * Event
 */

// EVENT -  CONNECTE
export const CONNECTE = 'connect'; 

// EVENT -  DISCONNECTED
export const DISCONNECTED = 'disconnect'; 
// EVENT - CONNECT ERROR
export const CONNECT_ERROR ='connect_error';
// EVENT - CONNECT TIMEOUT
export const CONNECT_TIMEOUT='connect_timeout';
// EVENT - SOCKET CONNECTED
export const SOCKET_CONNECTED = 'socket_connected';
// EVENT - SOCKET CONNECTED
export const SOCKET_DISCONNECTED = 'socket_disconnected';
// EVENT - WRONG INFORMATION
export const WRONG_INFORMATION = 'wrong_information';

/**
 * EMIT
 */
// EMIT - ON DOCTOR CONNECT
export const EMIT_ON_DOCTOR_CONNECT = 'on_doctor_connect';

/**
 * Types
 */
//TYPE -  VIDEO CALL CONNECTED
export const VIDEO_CALL_CONNECTED = 'video_call_connected';


/**
 * Types
 */
//TYPE -  PATIENT CALL INITIATION
export const PATIENT_CALL_INITIATION = 'patient_call_initiation';
//TYPE -  ON MESSAGE
export const ON_MESSAGE = 'on_message';
//TYPE -  PATIENT CALL INITIATION
export const EMIT_ON_SEND_MESSAGE = 'on_send_message';

/* ----- Patient Chat nsp type of Listener--- */

//TYPE -   DOCTOR CONNECTED
export const DOCTOR_CONNECTED = 'doctor_connected';
//TYPE -   DOCTOR CONNECTED
export const DOCTOR_DISCONNECTION = 'doctor_disconnection';
//TYPE -    DOCTOR BUSY
export const DOCTOR_BUSY = 'doctor_busy';
//TYPE -   DOCTOR END CALL
export const  DOCTOR_END_CALL = 'call_end_by_physician';

/* ----- Doctor Chat nsp type of Listener---     */
//TYPE -   PATIENT DISCONNECTION
export const  PATIENT_CONNECTED = 'patient_connected';

//TYPE -   PATIENT CONNECTED
export const   PATIENT_DISCONNECTION = 'patient_disconnection';

//TYPE -    PATIENT BUSY
export const  PATIENT_BUSY = 'patient_busy';

// //TYPE -    PATIENT END CALL
// export const   PATIENT_END_CALL = 'call_end_by_patient';

// //TYPE -    ON PATIENT END CALL
export const ON_PATIENT_CALL_END  = 'on_patient_call_end';

//TYPE -    PATIENT END CALL
export const PATIENT_CALL_END = 'patient_call_end';


/**
 * SOCKET IO - TYPE -  ON PHYSICIAN CAMERA OFF
 */
export const ON_PHYSICIAN_CAMERA_OFF = 'on_physician_camera_off';

/**
 * SOCKET IO - TYPE -  ON PHYSICIAN CAMERA ON
 */
export const ON_PHYSICIAN_CAMERA_ON = 'on_physician_camera_on';

/**
 * SOCKET IO - TYPE -  ON PHYSICIAN CAMERA ON
 */
export const PHYSICIAN_CAMERA_ON = 'physician_camera_on';

/**
 * SOCKET IO - TYPE -  ON PHYSICIAN CAMERA OFF
 */
export const PHYSICIAN_CAMERA_OFF = 'physician_camera_off';

/**
 * SOCKET IO - TYPE - NEW ONDEMAND BOOKED
 */
export const NEW_ONDEMAND_BOOKED = 'new_ondemand';


/**
 * SOCKET IO - TYPE - NEW APPOINTMENT BOOKED
 */
export const NEW_APPOINTMENT_BOOKED = 'new_appointment';