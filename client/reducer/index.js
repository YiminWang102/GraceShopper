import { combineReducers } from 'redux';
import user from './user';
import products from './products';
import users from './users'

export default combineReducers({
  user,
  users,
  products
});
