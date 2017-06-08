import Order from '../components/Order';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
  };
};

const OrderContainer = connect(
  mapStateToProps
)(Order);

export default OrderContainer;
