import React, { Component } from 'react';
import { connect } from 'react-redux';
import connectLogo from '../utils/images/connectLogo.svg';
import { Link } from 'react-router-dom';
import { PATH } from '../utils/Constants';

class SideBar extends Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this.state = { 
      userSelfAdding:  true     
    };
  }

  componentDidMount() {
    console.log(this.props)
  }


  render() {
    return (
    <React.Fragment>
      <div className="users-panel">
        <div className="video-logo">
          <Link to={PATH.INDEX}>
            <img src={connectLogo} alt="" />
          </Link>
        </div>
        <div className="controllers">
          <ul hidden={!this.props.siderBarBtns.isEnableSideBarBtn}>
           <li id="share-screen" data-tip="Screen Sharing" hidden={!this.props.siderBarBtns.isEnableScreenShareBtn}>
            <i className="fas fa-desktop"></i>
          </li>
          <li className="open-chat" id="chat" onClick={(e) => {this.props.toggleChatScreen()}} 
              data-tip="Chat Messages" >
            <i className="far fa-comments">
            <span className="badge" style={{color:'red'}}>
              {/* {{meetingService.unReadMsgCount}} */}ROOM COUNT
            </span></i>
          </li>
          <li id="start-recording" disabled={this.state.userSelfAdding} data-tip="start recording">
            <i className="far fa-play-circle" style={{color: 'green'}}></i>
          </li>
          <li id="stop-recording" disabled={this.state.userSelfAdding} data-tip="stop recording">
            <i className="far fa-stop-circle" style={{color: 'red'}}></i>
          </li>
          <li id="show-video" disabled={this.state.enableBtnAction} data-tip="video on" data-ng-click="meetingService.showVideo()" >
                <i className="far fa-video-slash" style={{color: 'red'}}></i>
          </li>
		      <li id="hide-video" data-tip="video off" onClick={this.state.enableBtnAction && this.state.hideVideo} >
            <i className="far fa-video" style={{color: 'green'}}></i>
          </li>
          <li id="unmute" disabled={this.state.userSelfAdding} data-tip="unmute" data-ng-click="meetingService.unmute()" >
            <i className="far fa-microphone-slash" style={{color: 'red'}}></i>
          </li>
          <li id="mute" disabled={this.state.userSelfAdding} data-tip="mute" data-ng-click={this.state.enableBtnAction}>
            <i className="far fa-microphone" style={{color: 'green'}}></i>
          </li>
          <li id="end-call"  data-tip="end call"
          ng-show="meetingService.isInitiator && meetingService.callStarted && meetingService.privateMeetingRoom && meetingService.createdBy">
            <i className="far fa-phone-slash" aria-hidden="true" style={{color: 'red'}} data-toggle="modal" data-target="#endConfirmModal"></i>
          </li>
          <li id="leave-call" disabled={this.state.userSelfAdding}  data-tip="leave room" data-ng-click="meetingService.userSelfAdding &&{this.state.enableBtnAction}&& leaveModal()" ng-show=" !meetingService.createdBy">
            <i className="far fa-hand-point-left" aria-hidden="true" style={{color: 'red'}}></i>
          </li>
          <li id="join-call" disabled={this.state.userSelfAdding}  data-tip="join room" data-ng-click="meetingService.joinRoom()" ng-show="meetingService.showJoinRoomIcon">
            <i className="far fa-hand-point-right" aria-hidden="true" style={{color: 'green'}}></i>
          </li>
          <li id="dasboard" disabled={this.state.userSelfAdding}  data-tip="Go to dasboard"              data-ng-click="meetingService.gotToDashboard()">
            <i className="far fa-home" aria-hidden="true" style={{color: 'green'}}></i>
          </li>
        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
