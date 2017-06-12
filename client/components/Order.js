import React from 'react';
import {Link} from 'react-router';

export default function Product (props) {

  const order = props.order;

  return (
    <div className="order">
      <div>
        <h3>Order placed on { order.createdAt }</h3>
        <h4>Total: { order.totalPrice } </h4>
        <h4>Status: { order.status }</h4>
      </div>
    </div>
  );
}
