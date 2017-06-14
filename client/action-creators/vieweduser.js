import {SET_VIEWED_USER} from '../reducer/constants';
import axios from 'axios';

export const setViewedUser = (user) => ({type: SET_VIEWED_USER, viewedUser: user});

export const setUserToView = (id) => dispatch => {
  axios.get(`/api/users/${id}`)
    .then(res => dispatch(setViewedUser(res.data)))
    .catch(error => console.error(error));
};
