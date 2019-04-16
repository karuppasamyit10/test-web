import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {PATH} from '../../../utils/Constants';
import '../VideoWork/MyAlert';

const RTC =  window.RTCMultiConnection;
const getHTMLMediaElement =  window.getHTMLMediaElement;
var localStream;
var localVideo;
if(RTC!=undefined && getHTMLMediaElement)
{
  var connection = new RTC();
  window.enableAdapter = true; 
}

class TestVideo extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      myUserId: undefined,
      myStreamId: undefined,
    };
    this.removeDevice = this.removeDevice.bind(this);
  };
    
  componentWillUnmount()
  {
    this.removeDevice();
  }

  componentWillMount() 
  {
  }

  removeDevice = ()=>
  {
    if(localVideo)
    {
     localVideo.pause();
     localVideo.src = "";
     localStream.stop();
     connection.leave();
    }
  }

  componentDidMount() 
  {
    // console.log(connection)
    connection.socketURL = 'https://dev-manipal.careconnectclinic.com:8443/'; // generated via config.json
    // connection.socketMessageEvent = 'RTCMultiConnection-Message'; // generated via config.json
    connection.socketMessageEvent = 'audio-video-file-chat-demo';
    // connection.socketCustomEvent = 'RTCMultiConnection-Custom-Message';
    connection.enableFileSharing = false; // by default, it is "false".

    document.getElementById('open-room').onclick = function() {
      disableInputButtons();
      connection.open(document.getElementById('room-id').value, function() {
          showRoomURL(connection.sessionid);
      });
    };

  
  document.getElementById('join-room').onclick = function() {
    disableInputButtons();
    connection.join(document.getElementById('room-id').value);
  };

  document.getElementById('open-or-join-room').onclick = function() {
    disableInputButtons();
    connection.openOrJoin(document.getElementById('room-id').value, function(isRoomExists, roomid) {
        if (!isRoomExists) {
            showRoomURL(roomid);
        }
    });
  };

  document.getElementById('btn-leave-room').onclick = function() {
    this.disabled = true;

    if (connection.isInitiator) {
        // use this method if you did NOT set "autoCloseEntireSession===true"
        // for more info: https://github.com/muaz-khan/RTCMultiConnection#closeentiresession
        connection.closeEntireSession(function() {
            document.querySelector('h3').innerHTML = 'Entire session has been closed.';
        });
    } else {
        connection.leave();
    }
    enableInputButtons();
  };

  // ......................................................
  // ................FileSharing/TextChat Code.............
  // ......................................................

  document.getElementById('share-file').onclick = function() 
  {
    // var fileSelector = new FileSelector();
    // fileSelector.selectSingleFile(function(file) {
    //     connection.send(file);
    // });
  };

  document.getElementById('input-text-chat').onkeyup = function(e) 
  {
    if (e.keyCode != 13) return;

    // removing trailing/leading whitespace
    this.value = this.value.replace(/^\s+|\s+$/g, '');
    if (!this.value.length) return;

    connection.send(this.value);
    appendDIV(this.value);
    this.value = '';
  };

  var chatContainer = document.querySelector('.chat-output');

  function appendDIV(event) 
  {
    var div = document.createElement('div');
    div.innerHTML = event.data || event;
    chatContainer.insertBefore(div, chatContainer.firstChild);
    div.tabIndex = 0;
    div.focus();
    document.getElementById('input-text-chat').focus();
  }

  // ......................................................
  // ..................RTCMultiConnection Code.............
  // ......................................................

  connection.session = 
  {
    audio: true,
    video: true,
    data: true
  };

  connection.sdpConstraints.mandatory = 
  {
    OfferToReceiveAudio: true,
    OfferToReceiveVideo: true
  };
 
  connection.videosContainer = document.getElementById('videos-container');
  connection.onstream = function(event) 
  {
    console.log(event);
    event.mediaElement.removeAttribute('src');
    event.mediaElement.removeAttribute('srcObject');

    var video = document.createElement('video');
    video.controls = true;
    if(event.type === 'local') 
    {
        video.muted = true;
        localStream = event.stream;
        localVideo = video;
        // this.state({myStreamId: event.streamid, myUserId: event.userid})
    }
    video.srcObject = event.stream;

    var width = parseInt(connection.videosContainer.clientWidth / 2) - 20;
    var mediaElement = getHTMLMediaElement(video, 
      {
        title: event.userid,
        buttons: ['full-screen'],
        width: width,
        showOnMouseEnter: false
    });

    connection.videosContainer.appendChild(mediaElement);

    setTimeout(function() 
    {
        mediaElement.media.play();
        if(event.type === 'local') {
          localStream = event.stream;
          localVideo = video;
          // this.state({myStreamId: event.streamid, myUserId: event.userid})
      }
    }, 5000);

    mediaElement.id = event.streamid;
  };

  document.getElementById('close-device').onclick = function() 
  {
    if(localVideo)
    {
     localVideo.pause();
     localVideo.src = "";
     localStream.stop();
     connection.leave();
    }
  };

  connection.onstreamended = function(event) 
  {
    var mediaElement = document.getElementById(event.streamid);
    if (mediaElement) 
    {
        mediaElement.parentNode.removeChild(mediaElement);
    }
  };

  connection.onmessage = appendDIV;
  connection.filesContainer = document.getElementById('file-container');

  connection.onopen = function() 
  {
    document.getElementById('share-file').disabled = false;
    document.getElementById('input-text-chat').disabled = false;
    document.getElementById('btn-leave-room').disabled = false;

    document.querySelector('h3').innerHTML = 'You are connected with: ' + 
      connection.getAllParticipants().join(', ');
  };

  connection.onclose = function() 
  {
    console.log(connection.getAllParticipants())
    if (connection.getAllParticipants().length) 
    {
        document.querySelector('h3').innerHTML = 'You are still connected with: ' + connection.getAllParticipants().join(', ');
    } else {
        document.querySelector('h3').innerHTML = 'Seems session has been closed or all participants left.';
    }
  };

  connection.onEntireSessionClosed = function(event) 
  {
    document.getElementById('share-file').disabled = true;
    document.getElementById('input-text-chat').disabled = true;
    document.getElementById('btn-leave-room').disabled = true;

    document.getElementById('open-or-join-room').disabled = false;
    document.getElementById('open-room').disabled = false;
    document.getElementById('join-room').disabled = false;
    document.getElementById('room-id').disabled = false;

    connection.attachStreams.forEach(function(stream) 
    {
        stream.stop();
    });

    // don't display alert for moderator
    if (connection.userid === event.userid) return;
    document.querySelector('h3').innerHTML = 'Entire session has been closed by the moderator: ' + event.userid;
  };

  connection.onUserIdAlreadyTaken = function(useridAlreadyTaken, yourNewUserId) 
  {
    // seems room is already opened
    connection.join(useridAlreadyTaken);
  };

  connection.onMediaError = function(error) 
  {
    alert(error)
    connection.close();
  };


  function disableInputButtons() 
  {
    document.getElementById('open-or-join-room').disabled = true;
    document.getElementById('open-room').disabled = true;
    document.getElementById('join-room').disabled = true;
    document.getElementById('room-id').disabled = true;
    document.getElementById('btn-leave-room').disabled = false;
    // document.getElementById('close-device').disabled = false;
  }

  function enableInputButtons() 
  {
    document.getElementById('open-or-join-room').disabled = false;
    document.getElementById('open-room').disabled = false;
    document.getElementById('join-room').disabled = false;
    document.getElementById('room-id').disabled = false;
    document.getElementById('btn-leave-room').disabled = true;
    // document.getElementById('close-device').disabled = true;
  }

  // ......................................................
  // ......................Handling Room-ID................
  // ......................................................

  function showRoomURL(roomid) 
  {
    var roomHashURL = '#' + roomid;
    var roomQueryStringURL = '?roomid=' + roomid;

    var html = '<h2>Unique URL for your room:</h2><br>';

    html += 'Hash URL: <a href="' + roomHashURL + '" target="_blank">' + roomHashURL + '</a>';
    html += '<br>';
    html += 'QueryString URL: <a href="' + roomQueryStringURL + '" target="_blank">' + roomQueryStringURL + '</a>';

    var roomURLsDiv = document.getElementById('room-urls');
    roomURLsDiv.innerHTML = html;

    roomURLsDiv.style.display = 'block';
  }

  (function() 
  {
    var params = {},
        r = /([^&=]+)=?([^&]*)/g;

    function d(s) {
        return decodeURIComponent(s.replace(/\+/g, ' '));
    }
    var match, search = window.location.search;
    while (match = r.exec(search.substring(1)))
        params[d(match[1])] = d(match[2]);
    window.params = params;
  })();

    var roomid = '';
    if (localStorage.getItem(connection.socketMessageEvent)) 
    {
      roomid = localStorage.getItem(connection.socketMessageEvent);
    } else {
      roomid = connection.token();
    }
    document.getElementById('room-id').value = roomid;
    document.getElementById('room-id').onkeyup = function() 
    {
      localStorage.setItem(connection.socketMessageEvent, this.value);
    };

    var hashString = window.location.hash.replace('#', '');
    if (hashString.length && hashString.indexOf('comment-') == 0) {
      hashString = '';
    }

    var roomid = window.params.roomid;
    if (!roomid && hashString.length) 
    {
      roomid = hashString;
    }

    if (roomid && roomid.length) 
    {
      document.getElementById('room-id').value = roomid;
      localStorage.setItem(connection.socketMessageEvent, roomid);

      // auto-join-room
      (function reCheckRoomPresence() 
      {
          connection.checkPresence(roomid, function(isRoomExists) 
          {
              if (isRoomExists) {
                  connection.join(roomid);
                  return;
              }

              setTimeout(reCheckRoomPresence, 5000);
          });
      })();

    disableInputButtons();
    }
  }

  
  render() 
  {
    return (
    <React.Fragment>
      <h3>video streaming + text chat + file sharing</h3>
      {/* <video id="localVideo" width="100%" autoPlay user-media="user-media"></video> */}
      <input type="text" id="room-id" defaultValue="abcd" />
      <button id="open-room">Open Room</button>
      <button id="join-room">Join Room</button>
      <button id="open-or-join-room">Auto Open Or Join Room</button>
      <br></br>
      <input type="text" id="input-text-chat" placeholder="Enter Text Chat" disabled/>
      <button id="share-file" disabled>Share File</button>
      <button id="btn-leave-room" disabled>Leave /or close the room</button>
      <button id="btn-home"><Link to={PATH.INDEX}>Home</Link></button>
      <button id="close-device"onClick={this.closeMediaDevice}>CLOSE</button>
      <div id="room-urls" style={{textAlign: 'center', display: 'none', background: '#F1EDED', margin: '15px -10px', border: '1px solid rgb(189, 189, 189)', borderLeft: '0', borderRight: '0'}}></div>
      <div id="chat-container">
          <div id="file-container"></div>
          <div className="chat-output"></div>
      </div>
      <div id="videos-container"></div>
    </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestVideo);