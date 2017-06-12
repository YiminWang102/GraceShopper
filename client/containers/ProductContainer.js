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
      console.log('Product handleClick');
      event.preventDefault();
    },
    handleSubmit: event => {
      console.log('Product handleSubmit');
      event.preventDefault();
    }
  }
}


const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Product);

export default ProductContainer;
