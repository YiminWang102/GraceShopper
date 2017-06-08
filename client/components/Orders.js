import React from 'react';
import {Link} from 'react-router';

const fakeOrders = [
  {
    id: 1,
    totalPrice: 500,
    createdAt: Date.now()
  }, {
    id: 2,
    totalPrice: 850,
    createdAt: Date.now()
  },
];

export default function Orders (props) {

  const orders = fakeOrders;
  return (
    <div>
      <h3>Orders</h3>
      <div className="row">
        {
          orders && orders.map( (order, i) => (
            <div className="col-xs-4" key={ order.id }>
              <Link to={`/orders/${order.id}`}>
                <div className="orderInfo">
                  <h5>
                    <span>Order #{i + 1}: Total Price: ${order.totalPrice}</span>
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
