import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import {AppBar, ToolbarGroup, FlatButton} from 'material-ui';

const MyNavLinks = (props) => (
  <ToolbarGroup>
    {
      props.loggedIn ?
      (
       <div>
         <FlatButton label="View Cart" containerElement={<Link to="/" />} />
         {
          props.isUserAdmin ?
          (
           <FlatButton label="View Users" containerElement={<Link to="/users" />} />
          ) : ''
         }
         <FlatButton label="Log Out" containerElement={<Link to="/signup" />} />
       </div>
      )
      :
      (
      <FlatButton label="Log In" containerElement={<Link to="/signup" />} />
      )
    }
  </ToolbarGroup>
);

MyNavLinks.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  isUserAdmin: PropTypes.bool.isRequired
};

const MyAppbar = (props) => (
    <AppBar
      iconElementLeft={<FlatButton label="home" containerElement={<Link to="/" />} />}
      title="MemeShopper"
      iconElementRight={<MyNavLinks loggedIn={props.loggedIn} isUserAdmin={props.isUserAdmin}/>}
    />
);

export default MyAppbar;
