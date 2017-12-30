import React, { Component } from 'react';
import Interface from './components/Interface';
import _ from 'lodash';
import config from './lib/config';
import Matches from './lib/match';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const Header = () => {
  return (
    <h2>Connect 4</h2>
  )
}

const initialState = () => {
  let state = [];
  _.times(config.rows).map(i => {
    state.push(_.range(config.columns).map(i => 0))
  })
  return state;
}

const Button = (props) => {
  return(
    <button onClick={props.resetBoard}>Reset</button>
  )
}

class Connect4 extends Component {
  state = {
    circleStates: initialState(),
    player: config.availablePlayers[0],
    won: false
  }

  resetBoard = () => {
    this.setState({
      circleStates: initialState(),
      player: config.availablePlayers[0],
      won: false
    })
  }

  checkIfWon = (boardStatus) => (
    Matches(boardStatus)
  )

  changePlayer = (player) => (player == "red" ? "yellow" : "red")

  handleClick = (column) => {
    if (!this.state.won) {
      const circleStates = this.state.circleStates;
      const col_values = circleStates.map((row) => (row[column]))
      const row = col_values.indexOf(0);
      circleStates[row][column] = (this.state.player == "yellow" ? 1 : 2)
      this.setState({
        circleStates: circleStates,
        won: this.checkIfWon(circleStates)
      }, () => {
        if (!this.state.won) {
          this.setState({
            player: this.changePlayer(this.state.player)
          })
        }
      })
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Interface handleClick={this.handleClick} circleStates={this.state.circleStates} />
        <RaisedButton label="Reset Board" secondary={true} onClick={this.resetBoard} style={{ marginTop: '12px' }} />
        { this.state.won &&
          (<Dialog title="Winner" actions={[<FlatButton
            label="Reset"
            primary={true}
            onClick={this.resetBoard}
          />]} modal={true} open={true}>{`Player ${this.state.player.toUpperCase()} wins`}</Dialog>)
        }
      </div>
    )
  }
}

export default Connect4;