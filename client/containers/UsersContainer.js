import React, {Component} from 'react';
import {connect} from 'react-redux';
import Users from '../components/Users';
import {deleteSelectedUser, promoteSelectedUser, resetUserPassword} from '../reducer/users.js';

const mapStateToProps = function(state) {
  return {
    users: state.users,
    currentUser: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (event, id) => {
      event.preventDefault();
      dispatch(deleteSelectedUser(id));
    },
    promoteUser: (event, id) => {
      event.preventDefault();
      dispatch(promoteSelectedUser(id));
    },
    resetPassword: (event, id) => {
      event.preventDefault();
      dispatch(resetUserPassword(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
