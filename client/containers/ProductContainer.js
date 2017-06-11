import Product from '../components/Product';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    product: state.products.selected,
    orderId: state.orders.selected.orderId,
    userId: state.user.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: event => {

    }
  }
}


const ProductContainer = connect(mapStateToProps)(Product);

export default ProductContainer;
