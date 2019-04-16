/*************************************************
* webrtc-solution 
* SignIn.js
* @author Karuppasamy // on 08/04/2019
* Copyright � 2019 concertcare. All rights reserved.
*************************************************/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {PATH}  from '../utils/Constants';
import Header from '../components/Header';

/**
 * @package webrtc-solution
 * @type {React.ComponentClass}
 */
class SignIn extends Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }
    
  /**
   * @inheritDoc
   */
  componentDidMount() {
    // window.componentHandler.upgradeDom();
  }

  /**
   * @inheritDoc
   */
  componentWillMount() {
  }
  
  
  /**
   * Render Page
   */
  render() {
    return (
    <React.Fragment>
          <Header/>
      <section id="login-home">
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-12">
                <div className=" col-sm-4" style={{margin: '0 auto',display: 'table'}}>
                    <div className="main-form login-main-form">
                   		<form className="form-horizontal ng-pristine ng-valid">
	                        <div className="login-form ">
	                            <h1>LOGIN</h1>
	                            <div className="input-group">
	                                <span className="input-group-addon " id="basic-addon1">
	                                    <i className="fa fa-user" aria-hidden="true"></i>
	                                </span>
	                                <input type="text" className="form-control" placeholder="username or email" aria-describedby="basic-addon1"
	                                	tabindex="1" data-ng-model="authFields.userName" id="userName" name="userName"/>
	                            </div>
	                            <div className="red-text">
	                                <span id="userNameError"></span>
	                            </div>
	                            <div className="input-group">
	                                <span className="input-group-addon" id="basic-addon1 ">
	                                    <i className="fa fa-key " aria-hidden="true "></i>
	                                </span>
	                                 <input type="password" className="form-control" id="password" name="password" placeholder="enter password" tabindex="2" 
	                                 aria-describedby="basic-addon1" data-ng-model="authFields.password"/>
	                            </div>
	                           	<div className="red-text">
	                                <span id="passwordError"></span>
	                            </div>
	                        </div>
	                        <div className="login-form-btn">
	                            <button data-ng-disabled="isSubmitting" type="submit" className="btn btn-success"><span className="fa fa-sign-in" tabindex="3"> </span> LOGIN
	                            <i ng-hide="!isSubmitting" className="fa fa-spinner fa-spin" ></i></button>
	                        </div>
	                        <div className="form-existing-link">
	                            <p>Create account?
	                                <span>
                                    <Link to={PATH.SIGNUP} tabindex="4">SIGN UP</Link>
	                                </span>
	                            </p>
	                            <p>Forgotten?
	                                <span>
                                        <Link to={PATH.FORGET_PASSWORD} tabindex="5">PASSWORD</Link>
	                                </span>
	                            </p>
	                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


