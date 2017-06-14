
import { RECEIVE_ORDERS, RECEIVE_ORDER, RECEIVE_ORDER_PRODUCTS, CREATE_NEW_ORDER, SET_CART, UPDATE_QUANTITY, ADD_DISCOUNT} from '../reducer/constants';

import axios from 'axios';

export const updateQuantity = (orderId, productId, quantity) => {
  return ({
    type: UPDATE_QUANTITY,
    productId,
    quantity
  });
};

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

export const receiveOrderProducts = orderProducts => {
  return ({
    type: RECEIVE_ORDER_PRODUCTS,
    orderProducts
  });
};

export const createNewOrder = userId => {
  return ({
    type: CREATE_NEW_ORDER,
    userId
  });
};

export const submitOrder = orderId => {
  return ({
    type: SUBMIT_ORDER,
    orderId
  });
};

export const setCart = orderId => {
  return ({
    type: SET_CART,
    orderId
  });
};

export const applyDiscount = (orderId, newPrice, isDiscounted) => {
  return ({
    type: ADD_DISCOUNT,
    orderId,
    newPrice,
    isDiscounted
  })
}

export const newOrderCreator = userId => dispatch => {
  axios.post('/api/orders', {userId})
    .then( res => res.data )
    .then( order => {
      dispatch(createNewOrder(order));
    })
    .catch(err => {console.error(err);});
};

export const getOrderProductsByOrderId = orderId => dispatch => {
  axios.get(`/api/orders/${orderId}`)
    .then( res => res.data )
    .then( orderProducts => {
      dispatch(receiveOrderProducts(orderProducts));
    })
    .catch(err => {console.error(err);});
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

export const getAllOrders = () => dispatch => {
  axios.get('/api/orders')
    .then(res => res.data)
    .then(orders => {
      dispatch(receiveOrders(orders));
    });
};


/*
- Create new Order in table
- Set current user's cartId to id of newly created Order
*/
export const placeOrder = orderId => dispatch => {
  axios.put(`/api/orders/update/${orderId}`, {status: 2})
    .then( res => res.data )
    .catch(err => {console.error(err);});
};

export const quantityUpdater = (orderId, productId, quantity) => dispatch => {
  axios.put(`/api/orders/cart/${orderId}`, {productId, quantity})
    .then(res => dispatch(updateQuantity(res.data)))
    .catch(error => console.error(error));
};

export const updateOrder = (id, status) => {
  axios.put(`api/orders/update/${id}`,{status})
    .then(res => res.data)
    .catch(err => {conosle.error(err);});
};

export const discountApplicator = (orderId, newPrice, isDiscounted) => dispatch => {
  axios.put(`/api/orders/cart/${orderId}`, {newPrice, isDiscounted})
  .then(res => res.data)
  .then(order => {
    dispatch(applyDiscount(order.id, order.totalPrice, order.isDiscounted))
  })
  .catch(error => console.error(error))
}
