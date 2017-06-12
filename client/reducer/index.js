import { combineReducers } from 'redux';
import user from './user';
import products from './products';
import users from './users';
import orders from './orders';
import reviews from './reviews';


export default combineReducers({
  user,
  users,
  products,
  orders,
  reviews
});
