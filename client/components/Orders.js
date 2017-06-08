import React from 'react';
import {Link} from 'react-router';


export default function Orders (props) {

  const orders = props.orders;
  return (
    <div>
      <h3>Orders</h3>
      <div className="row">
        {
          orders && orders.map( order => (
            <div className="col-xs-4" key={ order.id }>
              <Link to={`/orders/${order.id}`}>
                <div className="orderInfo">
                  <h5>
                    <span>Order placed on {order.createdAt}: Total Price: ${order.totalPrice}</span>
                  </h5>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};
