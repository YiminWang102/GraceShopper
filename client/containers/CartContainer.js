import Cart from '../components/Cart';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    cart: state.orders.selected.orderProducts
  };
};

const CartContainer = connect(
  mapStateToProps
)(Cart);

export default CartContainer;
