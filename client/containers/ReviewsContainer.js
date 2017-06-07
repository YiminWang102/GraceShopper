import Reviews from '../components/Reviews';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    // products: state.products.list
  };
};

const ReviewsContainer = connect(
  mapStateToProps
)(Reviews);

export default ReviewsContainer;
