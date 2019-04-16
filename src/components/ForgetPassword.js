/*************************************************
/*************************************************
* webrtc-solution 
* ForgetPassword.js
* @author Karuppasamy // on 08/04/2019
* Copyright � 2019 concertcare. All rights reserved.
*************************************************/

import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * @package webrtc-solution
 * @type {React.ComponentClass}
 */
class ForgetPassword extends Component {
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
       hi ForgetPassword
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);


