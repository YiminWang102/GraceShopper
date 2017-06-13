import AllOrders from '../components/AllOrders';
import { connect } from 'react-redux';
import { updateOrder } from '../action-creators/orders';

const mapStateToProps = state => {
  return {
    orders: state.orders.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateOrderStatus: event => {
      const status = event.target.status.value;
      const id = event.target.button.id;
      if(+status > 0) {
        updateOrder(id, status);
      }
    }
  };
};

const AllOrdersContainer = connect(mapStateToProps, mapDispatchToProps)(AllOrders);

export default AllOrdersContainer;
