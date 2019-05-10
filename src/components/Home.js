/*************************************************
* webrtc-solution 
* home.js
* @author Karuppasamy // on 08/04/2019
* Copyright � 2019 concertcare. All rights reserved.
*************************************************/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {history} from 'react-router';
import { myInfoLog, myErrorLog } from '../utils/Utility';
import Client from '../utils/Client';
import Header from '../components/Header';
import loadingImg from '../utils/images/loading.gif';
import {PATH}  from '../utils/Constants';
import URL from '../utils/URL';
import { getRoomListByRoomName } from '../actions/RoomAction';

/**
 * @package webrtc-solution
 * @type {React.ComponentClass}
 */
class Home extends Component {
  static propTypes = {
    getRoomListByRoomName:PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
        roomBtnValue: 'Create a new room',
        findingRoom: false,
        isRoomExist: true,
        roomName : '' ,
        typingTimeout: null
    };
    this.onFieldChange = this.onFieldChange.bind(this);
   
  };
    
  /**
   * @inheritDoc
   */
  componentDidMount() {
    // window.componentHandler.upgradeDom();
  }


  /**
   * @inheritDoc
   */
  componentWillMount() 
  {
      Client.get(URL.API_SERVER_BASE_URL+URL.GET_API_SERVER_STATUS, null, false).then((response)=>{
        myInfoLog('====get api server status===::::', response);
      }).catch((error) => {
        myErrorLog('====get api server status error===????', error);
      });
  }
  
  onFieldChange(event) {
        // Clears the previously set timer.
        clearTimeout(this.typingTimeout);

        // Reset the timer, to make the http call after 475MS
        this.typingTimeout = setTimeout(this.callSearch, 475);

        // Setting value of the search box to a state.
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state.roomName);
        this.props.getRoomListByRoomName(
            this.state.roomName,
            (response) => {
              console.log(response);
              }
          );
    }


  /**
   * Render Page
   */
  render() {
    return (
    <React.Fragment>
        <Header/>
        <div className="content">
        <section id="home" className="scrollTo">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="left-maincontent">
                            <h1>Is your team remote or distributed?</h1>
                            <h3>Stay productive with effortless video collaboration!</h3>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="col-sm-12">
                            <div className="right-maincontent">
                                <h2>Create a room link, start talking</h2>
                                <div className="main-form">
                                    <div className="form-group has-danger">
                                        <div className="col-sm-14 input-group">
                                            <input type="text" name="roomName" className="form-control" onChange={this.onFieldChange} value="12345"
                                            style={{ fontStyle: 'italic'}}/> 
                                            { 
                                                this.state.findingRoom ? 
                                                <span className="input-group-addon loading-img-small">
                                                <img src={loadingImg} alt=""/>
                                                </span>
                                                :
                                                <span className="input-group-addon">
                                                <i className="fa fa-search" aria-hidden="true"></i>
                                                </span>
                                            }
                                        </div>
                                        <div className="col-sm-14">
                                            <button className={!this.state.isRoomExist?"btn btn-warning":"btn btn-success"} style={{cursor: 'pointer', width: '90%'}} type="submit" disabled={this.state.findingRoomInfo}>
                                                  <i className="fas fa-plus-square">
                                                  <Link to={this.state.roomName} className="w-100">
                                                  {this.state.roomBtnValue}
                                                </Link></i> 
                                {/* meeting({roomName: homeService.roomName, isInitiator: 1, isRoomCreate:1}) */}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="form-existing-link">
                                        <p>
                                            Know Where To Go?
                                            <span>
                                                <Link to={PATH.SIGNIN} className="w-100">
                                                    Private Room
                                                </Link>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="about" className="scrollTo"></section>
        <section id="services" className="scrollTo"></section>
        <section id="contact" className="scrollTo"></section>
        </div>
    </React.Fragment>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    roomInformation: state.patientAppointmentState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRoomListByRoomName: (roomName, callBack) => {
        dispatch(
            getRoomListByRoomName(roomName, callBack)
        );
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);


