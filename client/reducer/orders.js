import {
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT
} from '../constants';

const initialOrdersState = {
  selected: {},
  list: []
};

export default function (state = initialOrdersState, action) {
  const newState = Object.assign({}, state);

  switch(action.type) {

    case RECEIVE_ORDERS:
      newState.list = action.orders;
      break;

    case RECEIVE_ORDER:
      newState.selected = action.order;
      break;

    default:
      return state;
  }
}
