// Check that the browser supports getUserMedia.
// If it doesn't show an alert, otherwise continue.
if (navigator.getUserMedia) {
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
        console.log('The following error occurred when trying to use getUserMedia: ' + err);
        alert('Sorry, Please enable permission');
      }
    );
  
  } else {
    alert('Sorry, your browser does not support getUserMedia');
  }