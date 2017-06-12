import React, {Component} from 'react';
import {connect} from 'react-redux';
import Users from '../components/Users';
import {deleteSelectedUser} from '../reducer/users.js';

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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
