import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import {AppBar, ToolbarGroup, FlatButton} from 'material-ui';

const MyNavLinks = (props) => (
  <ToolbarGroup>
    {props.cartId &&
      <div>
        <FlatButton label="View Past Orders" containerElement={<Link to={`/orders/user/${props.userId}`} />} />
        <FlatButton label="View Cart" containerElement={<Link to={`/cart/${props.cartId}`} />} />
      </div>
    }
    {
      props.isUserAdmin ?
      <FlatButton label="View All Users" containerElement={<Link to={'/users/'} /> } /> : ''
    }
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
      iconElementRight={<MyNavLinks 
                          userId={props.user.id} 
                          cartId={props.user.cartId} 
                          logOut={props.logOut}
                          loggedIn={props.loggedIn}
                          isUserAdmin={props.isUserAdmin} />}
    />
);

export default MyAppbar;
