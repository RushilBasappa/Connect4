import React, { Component } from 'react';
import _ from 'lodash';
import Paper from 'material-ui/Paper';
import { Card, CardText } from 'material-ui/Card';
import Styles from './Styles';

const circle = (row, col, a) => {
  return (
    <Paper style={Styles.circle(a[row][col])} zDepth={2} circle={true} />
  )
}

class Interface extends Component {
  render() {
    const rows = this.props.circleStates.map((i, ikey) => {
      const entry = i.map((j,jkey) => (
        <td key={jkey}>{circle(ikey, jkey, this.props.circleStates)}</td>
      ))
      return (<tr key={ikey}>{entry}</tr>)
    })
    return (
      <div style={Styles.flex_box}>
        <Card zDepth={2}>
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