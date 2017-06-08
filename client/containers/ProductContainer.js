import Product from '../components/Product';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    product: state.products.selected
  };
};

const ProductContainer = connect(mapStateToProps)(Product);

export default ProductContainer;
