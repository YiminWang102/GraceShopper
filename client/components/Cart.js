import React from 'react';
import {Link} from 'react-router';
import {RaisedButton} from 'material-ui';


const STATUSES = {
  1: 'Created',
  2: 'Processing',
  3: 'Cancelled',
  4: 'Complete'
}

export default function Product ({cart, dispatchPlaceOrder}) {
  console.log('cart :', cart);
  return (
    <div className="cart">
      <div>
        <h4>Total: { cart && cart.totalPrice } </h4>
        <h4>Status: { cart && STATUSES[cart.status] }</h4>
        <form onSubmit={dispatchPlaceOrder}>
        <RaisedButton label="Submit Order" type="submit" name="button" value={cart ? cart.id : null} />
        </form>
      </div>
    </div>
  );
}
