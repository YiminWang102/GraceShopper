import {
  RECEIVE_ORDERS,
  RECEIVE_ORDER,
  RECEIVE_ORDER_PRODUCTS,
  CREATE_NEW_ORDER,
  UPDATE_QUANTITY
} from './constants';


const initialOrdersState = {
  selected: {},
  list: []
};

export default function (state = initialOrdersState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_ORDERS:
      newState.list = action.orders;
      break;

    case RECEIVE_ORDER:
      newState.selected = action.order;
      break;

    case RECEIVE_ORDER_PRODUCTS:
      newState.selected.orderProducts = action.orderProducts;
      break;

    case CREATE_NEW_ORDER:
      newState.selected.userId = action.userId;
      break;

    case UPDATE_QUANTITY:
      for (let i = 0; i < state.selected.orderProducts.length; i++) {
        if (state.selected.orderProducts[i].id === action.productId) {
          newState.selected.orderProducts[i].quantity = action.quantity
          break;
        }
      }
      break;


    default:
      return state;
  }
  return newState;
}
