import React, { Component } from 'react';

class Child2 extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        test1234: true,
      };
      console.log(this.props);
    }
    
    render() {
      return (
        <button onClick={()=>this.props.toggleShow(this.state)}  type="button">
          Toggle Show
        </button>
      );
    }
  }

  export default Child2;