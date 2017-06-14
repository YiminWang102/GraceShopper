import {SET_CURRENT_USER, SET_USER_PASSWORD} from '../reducer/constants';

export const setCurrentUser = (user) => ({type: SET_CURRENT_USER, currentUser: user});
export const setUserPassword = (user) => ({type: SET_USER_PASSWORD, currentUser: user});
