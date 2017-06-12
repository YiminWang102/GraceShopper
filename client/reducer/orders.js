import {
  RECEIVE_ORDERS,
  RECEIVE_ORDER,
  RECEIVE_ORDER_PRODUCTS,
  CREATE_NEW_ORDER
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

    default:
      return state;
  }
  return newState;
}
