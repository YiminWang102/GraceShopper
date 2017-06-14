import React from 'react';
import {Link} from 'react-router';
import Divider from 'material-ui/Divider';
import {RaisedButton, TextField} from 'material-ui';

const STATUSES = {
  1: 'Created',
  2: 'Processing',
  3: 'Cancelled',
  4: 'Complete'
};


export default class AllOrders extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      filteredOrders: props.orders
    };
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  onFilterChange(event){
    const value = event.target.value;
    if(value){
      const filteredOrders = this.props.orders.filter(order => +order.status === +value);
      this.setState({filteredOrders});
    }
    else {
      this.setState({filteredOrders: this.props.orders});
    }
  }

  render(){
    const {orders, updateOrderStatus} = this.props;
    const filteredOrders = this.state.filteredOrders;
    return (
      <div>
        <h3>All Orders</h3>
        <form>
          <TextField floatingLabelText="Filter By Status" name="filterStatus" onChange={this.onFilterChange}/>
        </form>
        <div className="row">
          {
            filteredOrders && filteredOrders.map( order => (
              <div className="col-xs-4" key={ order.id }>
                <Link to={`/orders/order/${order.id}`}>
                  <div className="orderInfo">
                    <h5> Order placed on {order.createdAt}: </h5>
                    <h5> Total Price: ${order.totalPrice} </h5>
                    <h5> Status: {STATUSES[order.status]} </h5>
                    <h5> Order Id: {order.id}</h5>
                  </div>
                </Link>
                <form onSubmit={updateOrderStatus}>
                  <TextField name="status" />
                  <RaisedButton label="Update Order Status" type="submit" name="button" id={order.id}/>
                </form>
                <Divider />
              </div>
            ))
          }
        </div>
      </div>
    );}
};
