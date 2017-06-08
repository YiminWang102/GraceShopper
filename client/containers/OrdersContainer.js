import Orders from '../components/Orders';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
  };
};

const OrdersContainer = connect(mapStateToProps)(Orders);

export default OrdersContainer;
