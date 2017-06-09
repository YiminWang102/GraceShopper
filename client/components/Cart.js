import React from 'react';
import {Link} from 'react-router';

export default function Product ({cart}) {
  console.log('cart :', cart);
  return (
    <div className="cart">
      <div>
        <h4>Total: { cart && cart.totalPrice } </h4>
        <h4>Status: { cart && cart.status }</h4>
      </div>
    </div>
  );
}
