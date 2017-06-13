import {
  CREATE_NEW_ORDERPRODUCT
} from './constants';

const initialOrdersState = {
};

export default function (state = initialOrdersState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {

    case CREATE_NEW_ORDERPRODUCT:
      newState.productId = action.productId;
      newState.orderId = action.orderId;
      newState.quantity = action.quantity;
      break;

    default:
      return state;
  }
  return newState;
}
