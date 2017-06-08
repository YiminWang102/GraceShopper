import axios from 'axios';
import { browserHistory } from 'react-router';


//CONSTANTS
const FETCH_USERS = 'FETCH_USERS'

//ACTION CREATORS
const initUsers = (users) => ({type: FETCH_USERS, users})

//REDUCER
const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.users
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

export default usersReducer
