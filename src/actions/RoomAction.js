import { ACTION_TYPES } from '../utils/Constants';
import { GET_ROOM_INFORMATION_BY_ROOMNAME } from '../utils/URL';
import { myInfoLog, myErrorLog } from '../utils/Utility';
import Client from '../utils/Client';

/**
 * Get Appointment list
 * @param {String} roomName 
 * @param {object} callBack 
 */
export const getRoomListByRoomName=(
  roomName,
  callBack
)=> {
  return function(dispatch) {
    let params = {
      roomName
    };
    Client.get(GET_ROOM_INFORMATION_BY_ROOMNAME, params, true)
      .then((response) => {
        myInfoLog('====GET_ROOM_INFORMATION_BY_ROOMNAME ===::::', response);
        callBack(response);
        if (response.response_code === 0) {
          dispatch({
            type: ACTION_TYPES.ROOM.GET_ROOM_INFORMATION_BY_ROOMNAME,
            payload: response.response,
          });
        }
      })
      .catch((error) => {
        myErrorLog('====GET_ROOM_INFORMATION_BY_ROOMNAME error===????', error);
        callBack(false);
      });
  };
};