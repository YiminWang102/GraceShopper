import {
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT,
  CREATE_PRODUCT
} from './constants';

// import {convertProduct, convertProducts} from '../utils';

const initialProductsState = {
  selected: {},
  list: []
};

export default function (state = initialProductsState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_PRODUCTS:
      newState.list = action.products;
      break;

    case RECEIVE_PRODUCT:
      newState.selected = action.product;
      break;

    case CREATE_PRODUCT:
      newState.list.push(action.order)

    default:
      return state;

  }
  return newState;
}
