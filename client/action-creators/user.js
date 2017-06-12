import {SET_CURRENT_USER} from '../reducer/constants';

export const setCurrentUser = (user) => ({type: SET_CURRENT_USER, currentUser: user})
