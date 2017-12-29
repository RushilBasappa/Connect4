import React, { Component } from 'react';
import _ from 'lodash';
import Paper from 'material-ui/Paper';
import { Card, CardText } from 'material-ui/Card';
import Styles from './Styles';
import config from '../lib/config'

const circle = (row, col, a) => {
  return (
    <Paper style={Styles.circle(a[row][col])} zDepth={1} circle={true} />
  )
}

const initialState = () => {
  let state = [];
  _.times(config.rows).map(i => {
    state.push(_.range(config.columns).map(i => 0))
  })
  return state;
}

class Interface extends Component {
  state = {
    circleStates: initialState(),
    player: config.availablePlayers[0]
  }
  changePlayer = (player) => (player == "red" ? "yellow" : "red")

  handleClick = (column) => {
    const circleStates = this.state.circleStates;
    const col_values = circleStates.map((row) => (row[column]))
    const row = col_values.indexOf(0);
    circleStates[row][column] = (this.state.player == "red" ? 1 : 2)
    this.setState({
      circleStates: circleStates,
      player: this.changePlayer(this.state.player)
    })
  }
  render() {
    const rows = this.state.circleStates.map((i, ikey) => {
      const entry = i.map((j, jkey) => (
        <td key={jkey} onClick={() => this.handleClick(jkey)}>{circle(ikey, jkey, this.state.circleStates)}</td>
      ))
      return (<tr key={ikey}>{entry}</tr>)
    }).reverse()

    return (
      <div style={Styles.flex_box}>
        <Card zDepth={4} style={Styles.bgBlue}>
          <CardText>
            <table>
              <tbody>
                {rows}
              </tbody>
            </table>
          </CardText>
        </Card>
      </div>
    )
  }
}

export default Interface;