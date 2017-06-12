import axios from 'axios';
import { browserHistory } from 'react-router';
import {SET_CURRENT_USER, DELETE_USER} from '../constants'
import {setCurrentUser} from '../action-creators/user'

const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';

const defaultUser = {}

const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });

export const setUser = (id) => dispatch => {
  axios.get(`/api/users/${id}`)
  .then(res => dispatch(setCurrentUser(res.data)))
  .catch(error => console.error(error));
}

export const me = () =>
  dispatch =>
    axios.get('/auth/me')
      .then(res =>
        dispatch(getUser(res.data || defaultUser)));

export const auth = (email, password, method, name) =>
  dispatch =>
    axios.post(`/auth/${method}`, { email, password, name})
      .then(res => {
        dispatch(getUser(res.data));
        browserHistory.push('/');
      })
      .catch(error =>
        dispatch(getUser({ error })));

export const logout = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then(res => {
        dispatch(removeUser());
        browserHistory.push('/signup/login');
      })
      .catch(err => console.log(err));

export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    case SET_CURRENT_USER:
      return action.currentUser;
    default:
      return state;
  }
}
