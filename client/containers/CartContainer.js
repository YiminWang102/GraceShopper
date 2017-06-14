import Cart from '../components/Cart';
import { connect } from 'react-redux';
import {placeOrder, quantityUpdater, discountApplicator} from '../action-creators/orders';

const mapStateToProps = (state) => {
  return {
    cart: state.orders.selected.orderProducts
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
    },

    handlePromoCode: (event) => {
      let cartInfo = event.target.promoSubmit.value.split(' ').map(val => parseInt(val, 10));
      if (event.target.promo.value === 'hotgeoff') {
        dispatch(discountApplicator(cartInfo[0], cartInfo[1] / 2, true));
      }
    }
  };
};
const CartContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Cart);

export default CartContainer;
