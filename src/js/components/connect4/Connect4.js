import React,{ Component } from 'react';
import Interface from './components/Interface';
import _ from 'lodash';

const Header = () => {
  return(
    <p>Connect 4</p>
  )
}

const initialState = () => {
  let state = [];
  _.times(6).map(i => {
    state.push(_.range(7).map(i => 0))
  })
  return state;
}

class Connect4 extends Component {
  state = {
    circleStates: initialState()
  }
  render(){
    return(
      <div>
        <Header/>
        <Interface circleStates={this.state.circleStates} />
      </div>
    )
  }
}

export default Connect4;