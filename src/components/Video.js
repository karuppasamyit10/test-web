import React, { Component } from 'react';
import { connect } from 'react-redux';

class Video extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  };
    
  /**
   * @inheritDoc
   */
  componentDidMount() {
  }


  componentWillMount() {
  }
  
  render() {
    return (
    <React.Fragment>
        <div id="videos-container-me"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Video);


