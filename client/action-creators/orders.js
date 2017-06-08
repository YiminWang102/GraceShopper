import { RECEIVE_ORDERS, RECEIVE_ORDER } from '../constants';
import axios from 'axios';

export const receiveOrders = orders => {
  return ({
    type: RECEIVE_ORDERS,
    orders
  });
};

export const receiveOrder = order => {
  return ({
    type: RECEIVE_ORDER,
    order
  });
};

export const getOrdersByUserId = userId => dispatch => {
  axios.get(`/api/orders/user/${userId}`)
    .then( res => res.data )
    .then( orders => {
      dispatch(receiveOrders(orders));
    })
    .catch(err => {console.error(err);});
};

export const getOrderById = orderId => dispatch => {
  axios.get(`/api/orders/${orderId}`)
    .then( res => res.data )
    .then( order => {
      dispatch(receiveOrder(order));
    })
    .catch(err => {console.error(err);});
};
