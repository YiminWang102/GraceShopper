import {SET_VIEWED_USER} from './constants';

const defaultViewedUser = {};

export default function (state = defaultViewedUser, action) {
  switch (action.type) {
    case SET_VIEWED_USER:
      return action.viewedUser;
    default:
      return state;
  }
}