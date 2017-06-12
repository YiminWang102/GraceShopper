import {SET_CURRENT_USER, DELETE_USER} from '../constants';

export const setCurrentUser = (user) => ({type: SET_CURRENT_USER, currentUser: user});

