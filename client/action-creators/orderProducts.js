import { CREATE_NEW_ORDERPRODUCT } from '../reducer/constants';
import axios from 'axios';
export const createNewOrderProduct = (orderId, productId, quantity) => {
  return ({
    type: CREATE_NEW_ORDERPRODUCT,
    orderId,
    productId,
    quantity
  });
};

export const newOrderProductCreator = (orderId, productId, quantity) => dispatch => {
  axios.post(`/api/orders/${orderId}`, {productId, quantity})
    .then( res => res.data )
    .then( orderProducts => {
      dispatch(createNewOrderProduct(orderProducts));
    })
    .catch(err => {console.error(err);});
};

