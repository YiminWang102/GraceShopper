import React, {Component} from 'react';
import {connect} from 'react-redux';
import Users from '../components/Users'

const mapStateToProps = function(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users)
