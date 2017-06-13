import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../reducer/user';
// import '../index.scss';
//need to use this stylesheet just for the login/signup pages

// Component //

const Main = props => {

  const { children, handleClick, loggedIn } = props;

  return (
    <div>
      { loggedIn ?
          <nav>
            <Link to="/">Home</Link>
            <a href="#" onClick={handleClick}>Logout</a>
          </nav> :
          <nav>
            <Link to="/signup/login">Login</Link>
            <Link to="/signup/signup">Sign Up</Link>
          </nav>
      }
      <hr />
      { children }
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

// Container //

const mapState = ({ user }) => ({
  loggedIn: !!user.id
});

const mapDispatch = dispatch => ({
  handleClick () {
    dispatch(logout());
  }
});

export default connect(mapState, mapDispatch)(Main);
