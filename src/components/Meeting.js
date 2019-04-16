import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBar from './SideBar';
import ChatScreen from './ChatScreen';
import VideoScreen from './VideoScreen';
import ReactTooltip from 'react-tooltip';

class Meeting extends Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this.state = {
      isEnableScreenShareBtn: true,
      isEnableRecordingBtn: true,
      isEnableSideBarBtn: false,
      isShowChat: false,
      isRecordVideo: false,
      ccareMultiConnection: {}
    };
  }

  componentDidMount() {
    console.log(this.props);
    // this.setState({ ccareMultiConnection : new RTCMultiConnection})
  }

  toggleChatScreen = (value) => {
    console.log("toggleChatScreen called");
    this.setState(state => ({ isShowChat: !state.isShowChat }));
   console.log(value);
 };

  render() {
    return (
    <React.Fragment>
        <div className="parent-panel">
          <SideBar toggleChatScreen={this.toggleChatScreen} siderBarBtns={this.state} title="sideBar"/>
          <VideoScreen prop={this.props} title="videoScreen"/>
          {
            this.state.isShowChat 
            ? 
            <ChatScreen toggleChatScreen={this.toggleChatScreen} 
            props={this.props} title="chatScreen"/>
            :
            ''
          }
          <ReactTooltip />
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

export default connect(mapStateToProps, mapDispatchToProps)(Meeting);
