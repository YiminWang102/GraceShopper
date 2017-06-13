import React from 'react';
import {RaisedButton, TextField} from 'material-ui';

const STATUSES = {
  1: 'Created',
  2: 'Processing',
  3: 'Cancelled',
  4: 'Complete'
}

export default function Product ({cart, handleOrderSubmit, handleQuantityUpdate}) {
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
        <form onSubmit={handleOrderSubmit}>
          <TextField name="promo" defaultValue="" floatingLabelText="Promo Code" />
          <RaisedButton label="Submit Order" type="" name="promo" value={cart ? cart.id : null} />
          <h4>Status: { cart && STATUSES[cart.status] }</h4>
          <RaisedButton label="Submit Order" type="submit" name="button" value={cart ? cart.id : null} />
        </form>
      </div>
    </div>
  );
}
