import React, { Component } from 'react';
import { connect } from 'react-redux';
import connectLogo from '../utils/images/connectLogo.svg';
import ReactTooltip from 'react-tooltip';

class ChatScreen extends Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
    <React.Fragment>
      <div className="chat-toggle show-chat" id="chatPanel">
      <div className="panel panel-primary">
      <div>
				<a style={{float: 'left'}} id="btn-chat"  onClick={()=>this.props.toggleChatScreen()}
					 data-tip="close" className="open-chat">
	            <i className="far fa-times-circle"></i>
	        </a>
	        <p></p>
        </div>
        <div className="panel-body" id="chatMessageList" >
		    <div style={{paddingTop: '23px'}} ng-if="meetingService.showLoadEarlierMsgsLink">
		      <div style={{textAlign: 'center'}}>
          <a ng-show="!meetingService.isLoadingChatMsgList" ng-click="meetingService.loadEarlierMsgs()" 
          style={{cursor:'pointer', color: '#007bff'}}>Load earlier messages</a>
		    	  <i ng-show="meetingService.isLoadingChatMsgList" className="fa fa-spinner fa-spin"></i>
		      </div>
   			</div>
   			<div id="chat-panel">
			<ul className="chat">
				<li ng-if="chat.sender=='you'" className="left clearfix">
	            	<span className="chat-img floatLeft">
	                	<img src="https://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" className="img-circle" />
	               </span>
              	   <div className="chat-body clearfix">
               			<div className="header">
	                 		<strong className="primary-font">chat.meetingUserName</strong>
	                    	<small className="float-right text-muted">
	                      	<span className="glyphicon glyphicon-time"></span>
                           chat.createdDate | date:'dd/MM/yyyy hh:mm:ss'
                           chat.createdDate
	                    	</small>
              			</div>
                		<p ng-if="chat.message!=''"  style={{paddingLeft: '1px', width: '100%', wordWrap: 'break-word',tableLayout: 'fixed'}}>
	                  	chat.message
	               		</p>
	               		<p ng-if="chat.message==''" style={{paddingLeft: '1px', width: '100%', wordWrap: 'break-word',tableLayout: 'fixed'}}>
	               			<a ng-href="{{chat.url}}" download="{{chat.fileName}}">Download <strong style={{color:'red'}} target="_blank" >chat.fileName</strong>  </a>
	                		<img ng-if="chat.fileType=='image/png'" ng-src="{{chat.url}}" style={{maxWidth: '80%'}}/>
	                	</p>
              	  </div>
            	</li>
	            <li ng-if="chat.sender=='me'" className="right clearfix">
	              <span className="chat-img float-right">
	                <img src="https://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" className="img-circle" />
	              </span>
	              <div className="chat-body clearfix">
	                <div className="header">
	                 	<strong className="float-right primary-font">chat.meetingUserName</strong>
	                  	<small className=" text-muted">
	                    <span className="glyphicon glyphicon-time"></span>
	                     chat.createdDate | date:'dd/MM/yyyy hh:mm:ss'
	                  </small>
	                </div>
	                <p ng-if="chat.message!=''" style={{paddingLeft: '1px', width: '100%', wordWrap: 'break-word',tableLayout: 'fixed'}}>
	                  chat.message
	                </p>
	                <p ng-if="chat.message==''" style={{paddingLeft: '1px', width: '100%', wordWrap: 'break-word',tableLayout: 'fixed'}}>
	                <a ng-href="{{chat.url}}" download="{{chat.fileName}}">Download <strong style={{color:'red'}} target="_blank" >chat.fileName</strong>  </a>
	                	<img ng-if="chat.fileType=='image/png'" ng-src="{{chat.url}}" style={{maxWidth: '80%'}}/>
	                </p>
	              </div>
	            </li>  
				<li ng-if="!chat.sender"className="center clearfix">
	              <div className="chat-body clearfix">
	                <div className="header">
	                 <strong className="floatLeft primary-font"  style={{paddingRight: '5px', width: '50%', overFlow: 'hidden', textOverflow: 'ellipsis',  whiteSpace: 'nowrap'}} title="{{chat.meetingUserName}}">chat.meetingUserName </strong>
					 <p  className="floatLeft primary-font" style={{paddingLeft: '1px', width: '100%', wordWrap: 'break-word',tableLayout: 'fixed'}}>
					 	chat.message
	                </p>
					 <small className="float-right text-muted">
	                    <span className="glyphicon glyphicon-time"></span>
	                       chat.createdDate | date:'dd/MM/yyyy hh:mm:ss'
	                  </small>
	                  
	                </div>

	              </div>
	            </li>  
			</ul>
			</div>
		    <div data-ng-if="meetingService.chatMsgsList.length == 0" style={{textAlign: 'center'}}>Your chat messages shown here</div>
        </div>
        <div className="panel-footer">
          <div className="input-group">
					<i ng-show="meetingService.connection.peers.getAllParticipants().length>0" className="fas fa-paperclip" id="share-file" style={{padding: '10px',color: '#1180c3', fontSize: '20px'}}></i>
				<textarea className="form-control" id="input-text-chat" name="input-text-chat" rows="1" cols="33" maxLength="200" wrap="hard"></textarea>
	            <span className="input-group-btn" data-ng-if="meetingService.chatMsgsList.length >0">
	                    <i className="fas fa-file-export"><button className="btn btn-primary" id="btn-chat" ng-click="chatExportToTxtFile()" data-toggle="tooltip" data-placement="right" title="Save as text file">SAVE</button></i>
	            </span>
          </div>
        </div>
      </div>
    </div>
		<ReactTooltip />
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
