import Product from '../components/Product';
import { connect } from 'react-redux';
import {newOrderProductCreator} from '../action-creators/orderProducts';
const mapStateToProps = state => {
  return {
    product: state.products.selected,
    orderId: state.orders.selected.orderId,
    userId: state.user.id,
    cartId: state.user.cartId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: event => {
      event.preventDefault();
      dispatch(newOrderProductCreator(event.target.button.value, ownProps.params.productId, event.target.quantity.value));
    }
  };
};

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Product);

export default ProductContainer;
