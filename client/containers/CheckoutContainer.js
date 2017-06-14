import Checkout from '../components/Checkout';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    totalPrice: state.orders.selected.orderProducts.totalPrice
  };
};

const CheckoutContainer = connect(mapStateToProps)(Checkout);

export default CheckoutContainer;
