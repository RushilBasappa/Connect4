import React, { Component } from 'react';
import Interface from './components/Interface';
import _ from 'lodash';

const Header = () => {
  return (
    <h2>Connect 4</h2>
  )
}

class Connect4 extends Component {
  render() {
    return (
      <div>
        <Header />
        <Interface />
      </div>
    )
  }
}

export default Connect4;