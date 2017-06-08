import Orders from '../components/Orders';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    orders: state.orders.list
  };
};

const OrdersContainer = connect(mapStateToProps)(Orders);

export default OrdersContainer;
