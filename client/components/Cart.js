import React from 'react';
import {RaisedButton, TextField} from 'material-ui';
import Checkout from './Checkout';

const STATUSES = {
  1: 'Created',
  2: 'Processing',
  3: 'Cancelled',
  4: 'Complete'
}

export default function Product ({cart, handlePromoCode, handleOrderSubmit, handleQuantityUpdate}) {
  return (
    <div className="cart">
      <div>
        <h4>Total: { cart && cart.totalPrice } </h4>
        {
          cart && cart.products.map(product => {
            return (
              <div key = {product.id}>
                <h3>{ product.title }</h3>
                <img src={ product.imageUrl } className="img-thumbnail" />
                <h4> {product.description} </h4>
                <form onSubmit={handleQuantityUpdate}>
                  <TextField name="quantity" defaultValue={product.orderproduct.quantity} floatingLabelText="Quantity" />
                  <RaisedButton label="Update Quantity" type="submit" name="quantitySubmit" value={product.id} />
                </form>
              </div>
            )
          })
        }
        <form onSubmit = {handlePromoCode}>
          <TextField name="promo" defaultValue="" floatingLabelText="Promo Code" />
          <RaisedButton label="Add Promo Code" type="submit" name="promoSubmit" value={cart ? cart.id + ' ' + cart.totalPrice : null} />
        </form>
        <Checkout totalPrice={cart && cart.totalPrice} />
        <form onSubmit={handleOrderSubmit}>
          <h4>Status: { cart && STATUSES[cart.status] }</h4>
          <RaisedButton label="Submit Order" type="submit" name="button" value={cart ? cart.id : null} />
        </form>
      </div>
    </div>
  );
}
