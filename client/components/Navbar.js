import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import {AppBar, ToolbarGroup, FlatButton} from 'material-ui';

const MyNavLinks = (props) => (
  <ToolbarGroup>
    {props.cartId && <FlatButton label="View Cart" containerElement={<Link to={`/cart/${props.cartId}`} />} />}
    {
      props.cartId ?
      <FlatButton label="Log Out" onClick={() => {props.logOut()}}/>
      :<FlatButton label="Log In" containerElement={<Link to="/signup"/>} />
    }
  </ToolbarGroup>
);

MyNavLinks.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  isUserAdmin: PropTypes.bool.isRequired
};

const MyAppbar = (props) => (
    <AppBar 
      iconElementLeft={<FlatButton label="home" containerElement={<Link to="/"/>} />}
      title="MemeShopper"
      iconElementRight={<MyNavLinks cartId={props.cartId} logOut={props.logOut} />}
    />
);

export default MyAppbar;
