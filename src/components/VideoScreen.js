import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadingGifImg from '../utils/images/loading.gif';
import { Link } from 'react-router-dom';
import { PATH }  from '../utils/Constants';
import URL from '../utils/URL';

const RTC =  window.RTCMultiConnection;
const medialElement =  window.getHTMLMediaElement;
var connection = {};
var getHTMLMediaElement = {};

	if(RTC!=undefined && getHTMLMediaElement)
	{
		window.enableAdapter = true; 
		connection = new RTC();
		getHTMLMediaElement = medialElement;
	}

class VideoScreen extends Component 
{
	static propTypes = 
	{

  };

	constructor(props) 
	{
    super(props);
		this.state = 
		{
			showErrorPage: false,
			loadingCamera: true,
			remoteParticipants: []
    };
  }

	componentDidMount() 
	{
		console.log(connection);
		connection.socketURL = URL.STREAM_SERVER_BASE_URL; // generated via config.json
		connection.socketMessageEvent = '';
		connection.enableFileSharing = false; // by default, it is "false".
  }

	render() 
	{
    return (
    <React.Fragment>
		<div className="main-panel">
      <div className="video-area">
			{
				!this.state.showErrorPage 
				?
				<div className="video-main" id="main-video">
          {
						this.state.loadingCamera ?
						<div className="loading-my-cam">
						<img src={{loadingGifImg}} alt=""/>
							<h3 style={{alignItems: 'center'}}>Loading your camera and microphone...</h3>
          </div> : <div className="video-panel" id="videos-container-me"></div>
					}
					{
						this.state.remoteParticipants && this.state.remoteParticipants.length>0 ?
						<div className="sub-videos" id="videos-container-you">
							<div className="video-panel video-loading" id="newUserAdding">
									<h3>Getting partners video. Please wait...</h3>
							</div>
							<div className="video-panel" id="sharingUrlShow">
								<h1>Invite to start a meeting</h1>
								<input id="copyToClipboard" className="form-control" value="" readonly/>
								<button style={{width: '100%'}} className="btn btn-success">Copy link</button>
							</div>
        	</div> :''
					}         
        </div>
				:
				<div className="returnToRoom">
	        <div className="thank-you-message jstest-message">
	            <h5 className="body">Presenter not present the room</h5>
	        </div>
	        <p>
	            <button className="ui-button large primary-color jstest-return-button">
								<Link to={PATH.SIGNIN}>Signup</Link></button>
							<button className="ui-button large primary-color jstest-return-button">
								<Link to={PATH.INDEX}>Home</Link></button>	
	        </p>
	      </div>
			}        
      </div>
    </div> 
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

export default connect(mapStateToProps, mapDispatchToProps)(VideoScreen);
