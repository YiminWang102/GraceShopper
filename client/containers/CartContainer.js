import Cart from '../components/Cart';
import { connect } from 'react-redux';
import {placeOrder, quantityUpdater} from '../action-creators/orders'

const mapStateToProps = (state) => {
  return {
    cart: state.orders.selected.orderProducts,
    handlePromoCode: (event) => {
      if (event.promo.value === 'hotgeoff') {
        this.cart.totalPrice /= 2
      }
      console.log('------------------------------------------')
    }
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleOrderSubmit: event => {
      dispatch(placeOrder(event.target.button.value));
      alert('Your order has been placed!');
    },

    handleQuantityUpdate: event => {
      dispatch(quantityUpdater(ownProps.params.orderId, event.target.quantitySubmit.value, event.target.quantity.value));
    }
  };
};
const CartContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Cart);

export default CartContainer;
