import {
  RECEIVE_REVIEWS
} from './constants';

const initialProductsState = {
  list: []
};

export default function (state = initialProductsState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_REVIEWS:
      newState.list = action.reviews;
      break;

    default:
      return state;

  }
  return newState;
}
