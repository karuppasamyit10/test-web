/*************************************************
* webrtc-solution 
* Header.js
* @author Karuppasamy // on 09/04/2019
* Copyright � 2019 concertcare. All rights reserved.
*************************************************/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import logoImg from '../utils/images/logo.svg';
import menuImg from '../utils/images/menu.svg';
import closeImg from '../utils/images/close.svg';
import { Link } from 'react-router-dom';
import { PATH } from '../utils/Constants';
import  $ from 'jquery';


var scrolling = false;
var currentPos = 0;


/**
 * @package webrtc-solution
 * @type {React.ComponentClass}
 */
class Header extends Component {
  static propTypes = {
    
  };

  constructor(props) {
    super(props);
    this.state = 
    {
    };
  }
    
  /**
   * @inheritDoc
   */
  componentDidMount() {

    var that = this;
    $(document).ready(function () {  
        for (var i = 0; i < $('.scrollTo').length; i++) {
            var elm = $('.scrollTo')[i];
    
            if ($(document).scrollTop() >= $(elm).offset().top) {
                currentPos = i;
            }
        }
    
        $(document).bind('DOMMouseScroll', function (e) {
            if (e.originalEvent.detail > 0) {
                that.scrollDown();
            } else {
                that.scrollUp();
            }
            return false;
        });
    
        $(document).bind('mousewheel', function (e) {
            if (e.originalEvent.wheelDelta < 0) {
                that.scrollDown();
            } else {
                that.scrollUp();
            }
            return false;
        });
  
        $(".header-menu img.img-menu").click(function () {
            $(".header-nav-menu > nav").css({"width":"75pc", "height":"75pc"});
    
        });
  
        $(".nav-inner-div img.img-menu-close").click(function () {
            $(".header-nav-menu > nav").css({"width":"0pc", "height":"0pc"});
        });
    });
  }

  scrollUp() {
        if (!scrolling && currentPos > 0) {
            scrolling = true;
            currentPos--;
            var scrollToElement = $('.scrollTo')[currentPos];

            $('html, body').animate({
                scrollTop: $(scrollToElement).offset().top
            }, 500, function () {
                scrolling = false;
            });
        }
    }

    scrollDown() {
        if (!scrolling && currentPos < $('.scrollTo').length - 1) {
            scrolling = true;
            currentPos++;
            var scrollToElement = $('.scrollTo')[currentPos];

            $('html, body').animate({
                scrollTop: $(scrollToElement).offset().top
            }, 500, function () {
                scrolling = false;
            });
        }
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
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="header-social-icon">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-google-plus-g"></a>
                            <a href="#" className="fab fa-linkedin-in"></a>
                            <br></br>
                            <Link to={PATH.SIMPLE_DEMO} className="w-100">DEMO</Link>
                            <br></br>
                            <Link to={PATH.LEARN_REACT} className="w-100">LEARN_REACT</Link>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="header-logo">
                        <Link to={PATH.INDEX} className="w-100"><img src={logoImg} alt="logo"/> </Link>            
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="header-menu">
                            <img className="img-menu" src={menuImg} alt="logo"/>
                        </div>
                        <div className="header-nav-menu" >
                            <nav style={{width:'0pc', height:'0pc'}}>
                                <div className="nav-inner-div">
                                    <div className="menu-title">
                                        <img className="img-menu-close" src={closeImg} alt="logo"/>
                                            <h1>MENU</h1>
                                        <hr/>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="menu-content">
                                        <h3>
                                            <Link to='' className="w-100"> ABOUT US </Link>
                                        </h3>
                                        <h3>
                                            <Link to='' className="w-100"> BLOG </Link>
                                        </h3>
                                        <h3>
                                            <Link to='' className="w-100"> FAQ </Link>
                                        </h3>
                                        <h3>
                                            <Link to='' className="w-100"> PRICING </Link>
                                        </h3>
                                        <h3>
                                            <Link to={PATH.SIGNIN} className="w-100">SIGN IN</Link>
                                        </h3>
                                        <h3>
                                            <Link to={PATH.SIGNUP} className="w-100">SIGN UP</Link>
                                        </h3>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);


