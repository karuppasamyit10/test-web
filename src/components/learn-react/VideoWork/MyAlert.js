import { confirmAlert } from 'react-confirm-alert';
import {Link} from 'react-router-dom';
import {PATH} from '../../../utils/Constants';

const RerenderCards = () => {
  alert(1)
}

if (navigator.getUserMedia) 
{
  // Request the camera.
  navigator.getUserMedia(
    // Constraints
    {
      video: true
    },

    // Success Callback
    function(localMediaStream) {

    },

    // Error Callback
    function(err) {
      // Log the error to the console.
      confirmAlert({
        title: 'confirm to make this card as default',
        buttons: [
          {
            label: 'Yes',
            onClick : () => { alert(1) },
          },
          {
            label: 'No',
            onClick : () => { alert(2) },
          },
        ],
      });
        //alert('The following error occurred when trying to use getUserMedia: ' + err);
    }
  );

} else {
  alert('Sorry, your browser does not support getUserMedia');
}