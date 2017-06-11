import React from 'react';
import { Link } from 'react-router';
import {AppBar, ToolbarGroup, FlatButton} from 'material-ui';

const MyNavLinks = () => (
  <ToolbarGroup>
    <FlatButton label="Log In" containerElement={<Link to="/signup"/>}/>
  </ToolbarGroup>
);

const MyAppbar = () => (
    <AppBar
      iconElementLeft={<FlatButton label="home" containerElement={<Link to="/"/>} />}
      title="MemeShopper"
      iconElementRight={<MyNavLinks />}
    />
);

export default MyAppbar;
