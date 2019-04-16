import React, { Component } from 'react';
import Greeting from './Child1';
import Button from './Child2';
import {Link} from 'react-router-dom';
import {PATH} from '../../../utils/Constants';

class Learning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }
  
  toggleShow = (value) => {
     this.setState(state => ({ isShow: !state.isShow }));
    console.log(value);
  };

  componentWillReceiveProps(props)
  {
    console.log(props)
  }

  render() {
    const greeting = 'Welcome to React';

    return (
      <div>
        <Greeting greeting={greeting} isShow={this.state.isShow} />
        <Button toggleShow={this.toggleShow} props={this.props}/> 
        <button type="button">
          <Link to={PATH.INDEX}>Home</Link>
        </button>
      </div>
    );
  }
}
export default Learning;