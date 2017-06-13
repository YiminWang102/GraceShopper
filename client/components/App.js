import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavbarContainer from '../containers/NavbarContainer';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const muiTheme = getMuiTheme({
  palette: {
    textColor: '#000000',
  },
  appBar: {
    height: 100,
  },
  textField: {
    border: '1px solid #FF9800',
    backgroundColor: '#FFD699'
  }
});

export default function App ({ children }) {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div id="main" className="container-fluid">
        <div>
          <NavbarContainer />
        </div>
        <div>
          { children }
        </div>
      </div>
    </MuiThemeProvider>
  );
}
