import React from 'react';

const Child1 = ({ greeting, isShow }) =>
  isShow ? <h1>{greeting}</h1> : null;
  
  export default Child1;