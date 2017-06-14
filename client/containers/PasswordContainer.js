import React, {Component} from 'react';
import {connect} from 'react-redux';
import Password from '../components/Password';
import {setNewPassword} from '../reducer/user.js';

const mapStateToProps = function(state) {
  return {
    users: state.users,
    currentUser: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (event, id) => {
      event.preventDefault();
      dispatch(setNewPassword(id, event.target.passwordField.value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Password)
