import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavbarContainer from '../containers/NavbarContainer';

export default function App ({ children }) {
  return (
    <MuiThemeProvider>
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
