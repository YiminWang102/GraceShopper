import React from 'react';
import {Link} from 'react-router';
import {RaisedButton} from 'material-ui';

export default function Product ({cart, onClick}) {

  return (
    <div className="cart">
      <div>
        <h4>Total: { cart && cart.totalPrice } </h4>
        <h4>Status: { cart && cart.status }</h4>
        <form onSubmit={onClick}>
        <RaisedButton label="Submit Order" type="submit" name="button" value={cart ? cart.id : null} />
        </form>
      </div>
    </div>
  );
}
