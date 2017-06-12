import axios from 'axios';
import { browserHistory } from 'react-router';
import {DELETE_USER} from './constants'


//CONSTANTS
const FETCH_USERS = 'FETCH_USERS'

//ACTION CREATORS
const initUsers = (users) => ({type: FETCH_USERS, users});
export const deleteUser = (updatedUsers) => ({type: DELETE_USER, updatedUsers});

//REDUCER
const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.users
    case DELETE_USER:
      return action.updatedUsers
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

export default usersReducer
