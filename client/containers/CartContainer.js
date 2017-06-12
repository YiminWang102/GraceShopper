import Cart from '../components/Cart';
import { connect } from 'react-redux';
import {placeOrder} from '../action-creators/orders';

const mapStateToProps = (state) => {
  return {
    cart: state.orders.selected.orderProducts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: event => {
      dispatch(placeOrder(event.target.button.value));
      alert("Your order has been placed!");
    }
  };
};
const CartContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Cart);

export default CartContainer;
