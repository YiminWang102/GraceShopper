import React from 'react';
import { Link } from 'react-router';
import {AppBar, ToolbarGroup, FlatButton} from 'material-ui';

const MyNavLinks = (props) => (
  <ToolbarGroup>
    <FlatButton label="Log In" containerElement={<Link to="/signup"/>} />
    {props.cartId && <FlatButton label="View Cart" containerElement={<Link to={`/cart/${props.cartId}`} />} />}
  </ToolbarGroup>
);

const MyAppbar = (props) => (
    <AppBar
      iconElementLeft={<FlatButton label="home" containerElement={<Link to="/"/>} />}
      title="MemeShopper"
      iconElementRight={<MyNavLinks cartId={props.cartId} />}
    />
);

export default MyAppbar;
