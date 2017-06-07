import Products from '../components/Products';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    products: state.products.list
  };
};

const ProductsContainer = connect(
  mapStateToProps
)(Products);

export default ProductsContainer;
