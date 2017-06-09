import Order from '../components/Order';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    order: state.orders.selected
  };
};

const OrderContainer = connect(
  mapStateToProps
)(Order);

export default OrderContainer;
