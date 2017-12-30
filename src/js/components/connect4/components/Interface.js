import React, { Component } from 'react';
import _ from 'lodash';
import Paper from 'material-ui/Paper';
import { Card, CardText } from 'material-ui/Card';
import Styles from './Styles';
import config from '../lib/config';
import Matches from '../lib/match';

const circle = (row, col, a) => {
  return (
    <Paper style={Styles.circle(a[row][col])} zDepth={1} circle={true} />
  )
}

class Interface extends Component {
  render() {
    const rows = this.props.circleStates.map((i, ikey) => {
      const entry = i.map((j, jkey) => (
        <td key={jkey} onClick={() => this.props.handleClick(jkey)}>{circle(ikey, jkey, this.props.circleStates)}</td>
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