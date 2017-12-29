import React, { Component } from 'react';
import Connect4 from './connect4/Connect4'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Connect4 />
      </MuiThemeProvider>
    )
  }
}

export default App;