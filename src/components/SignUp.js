/*************************************************
/*************************************************
* webrtc-solution 
* SignUp.js
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
class SignUp extends Component {
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
      <section id="signup">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
                <div class=" col-sm-4 " style={{margin: '0 auto', display: 'table'}}>
                    <div class="main-form login-main-form">
                    	<form class="form-horizontal ng-pristine ng-valid" id="signupForm">
	                        <div class="login-form" style={{marginBottom: '1%'}}>
	                            <h1 style={{marginBottom: '1%'}}>SIGN UP </h1>
	                            <div class="input-group">
	                                <span class="input-group-addon " id="basic-addon1 ">
	                                    <i class="fa fa-user " aria-hidden="true "></i>
	                                </span>
	                                <input type="text" class="form-control " placeholder="firstname" id="firstName" aria-describedby="basic-addon1 " data-ng-model = "signUpService.userDetail.firstName" tabindex="1"/>
	                            </div>
								                <div class="red-text" >
	                                <span id="firstNameError"></span>
	                            </div>
	                            <div class="input-group ">
	                                <span class="input-group-addon " id="basic-addon1 ">
	                                    <i class="fa fa-user " aria-hidden="true "></i>
	                                </span>
	                                <input type="text" class="form-control " placeholder="lastname" id="lastName"  aria-describedby="basic-addon1 " data-ng-model = "signUpService.userDetail.lastName" tabindex="2"/>
	                            </div>
								<div class="red-text" >
	                                <span id="lastNameError"></span>
	                            </div>
								<div class="input-group ">
	                                <span class="input-group-addon " id="basic-addon1 ">
	                                    <i class="fa fa-building " aria-hidden="true "></i>
	                                </span>
	                                <input type="text" class="form-control " placeholder="companyname" id="companyName"  aria-describedby="basic-addon1 " data-ng-model = "signUpService.userDetail.companyName" tabindex="3"/>
	                            </div>
								<div class="red-text" >
	                                <span id="companyNameError"></span>
	                            </div>
								<div class="red-text" >
	                                <span id="projectNameError"></span>
	                            </div>
	                            <div class="input-group ">
	                                <span class="input-group-addon " id="basic-addon1 ">
	                                    <i class="fa fa-envelope " aria-hidden="true "></i>
	                                </span>
	                                <input type="email" class="form-control " placeholder="email" id="email" aria-describedby="basic-addon1 " data-ng-model = "signUpService.userDetail.email" tabindex="5"/>
	                            </div>
								<div class="red-text" >
	                                <span id="emailError"></span>
	                            </div>
	                            <div class="input-group ">
	                                <span class="input-group-addon " id="basic-addon1 ">
	                                    <i class="fas fa-user-edit" aria-hidden="true "></i>
	                                </span>
	                                <input type="text" class="form-control " placeholder="username" id="userName" aria-describedby="basic-addon1 " data-ng-model = "signUpService.userDetail.userName" tabindex="6"/>
	                            </div>
								<div class="red-text" >
	                                <span id="userNameError"></span>
	                            </div>
	                            <div class="input-group ">
	                                <span class="input-group-addon " id="basic-addon1 ">
	                                    <i class="fa fa-key " aria-hidden="true "></i>
	                                </span>
	                                <input type="password" class="form-control " placeholder="password" id="password" aria-describedby="basic-addon1 " data-ng-model = "signUpService.userDetail.password" tabindex="7"/>
	                            </div>
								<div class="red-text" >
	                                <span id="passwordError"></span>
	                            </div>
	                        </div>
	                        <div class="login-form-btn " style={{marginBottom: '1%'}}>
	                            <button type="submit" class="btn btn-success"><span class="fas fa-user-plus" tabindex="8"> </span> SIGN UP
	                            <i data-ng-show="signUpService.isSignUp" class="fa fa-spinner fa-spin" ></i></button>
	                        </div>
	                        <div class="form-existing-link ">
	                            <p>Signin?
	                                <span>
                                      <Link to={PATH.SIGNIN} tabindex="9">SIGN IN</Link>
	                                </span>
	                            </p>
	                            <p>Forgotten?
	                                <span>
                                      <Link to={PATH.FORGET_PASSWORD} tabindex="10">PASSWORD</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);