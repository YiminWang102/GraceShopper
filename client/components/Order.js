import React from 'react';
import {Link} from 'react-router';

const STATUSES = {
  1: 'Created',
  2: 'Processing',
  3: 'Cancelled',
  4: 'Complete'
}

export default function Product (props) {

  const {order, products} = props

  return (
    <div className="order">
      <div>
        <h3>Order placed on { products && products.createdAt }</h3>
        <h4>Total: { products && products.totalPrice } </h4>
        <h4>Status: { products && STATUSES[products.status] }</h4>
          {
            products && products.products.map(product => {
              return(
                <div key = {product.id}>
                  <h3>{ product.title }</h3>
                  <img src={ product.imageUrl } className="img-thumbnail" />
                  <h4>Quantity: {product.orderproduct.quantity}</h4>
                </div>
              )
            })
          }
      </div>
    </div>
  );
}
