import { combineReducers } from 'redux';
import user from './user';
import products from './products';
import users from './users';
import orders from './orders';

export default combineReducers({
  user,
  users,
  products,
  orders,
});
