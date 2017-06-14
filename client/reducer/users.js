import axios from 'axios';
import { browserHistory } from 'react-router';
import {DELETE_USER, PROMOTE_USER, RESET_PASSWORD} from './constants'


//CONSTANTS
const FETCH_USERS = 'FETCH_USERS'

//ACTION CREATORS
const initUsers = (users) => ({type: FETCH_USERS, users});
export const deleteUser = (updatedUsers) => ({type: DELETE_USER, updatedUsers});
export const promoteUser = (updatedUsers) => ({type: PROMOTE_USER, updatedUsers});
export const resetPassword = (updatedUsers) => ({type: RESET_PASSWORD, updatedUsers});

//REDUCER
const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.users;
    case DELETE_USER:
      return action.updatedUsers;
    case PROMOTE_USER:
      return action.updatedUsers;
    case RESET_PASSWORD:
      return action.updatedUsers;
    default:
      return state
  }
}

//DISPATCHERS

export const getAllUsers = () => dispatch => {
  axios.get('/api/users')
  .then(res => dispatch(initUsers(res.data)))
  .catch(error => console.error(error))
}

export const deleteSelectedUser = (id) => dispatch => {
  axios.delete(`/api/users/${id}`)
    .then(() => {
      return axios.get('/api/users');
    })
    .then(res => dispatch(deleteUser(res.data)))
    .then(browserHistory.push('/users'))
    .catch(error => console.error(error));
}

export const promoteSelectedUser = (id) => dispatch => {
  axios.put(`/api/users/${id}`, {isAdmin: true})
    .then(() => {
      return axios.get('/api/users');
    })
    .then(res => dispatch(promoteUser(res.data)))
    .catch(error => console.error(error));
}

export const resetUserPassword = (id) => dispatch => {
  axios.put(`/api/users/${id}`, {resetPassword: true})
    .then(() => {
      return axios.get('/api/users');
    })
    .then(res => dispatch(resetPassword(res.data)))
    .catch(error => console.error(error));
}

export default usersReducer
