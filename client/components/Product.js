import React from 'react';
import ReviewsContainer from '../containers/ReviewsContainer';
import {RaisedButton, TextField} from 'material-ui';


export default function Product (props) {
  const product = props.product;

  return (
    <div >
      <img src={product.imageUrl} />
      <h1>{product.title}</h1>
      <h3>{product.description}</h3>
        <form name="AddToCartButton" onSubmit={props.handleSubmit} >
          <TextField name="quantity" defaultValue="1" floatingLabelText="Quantity" />
          <RaisedButton value={props.cartId} name="button" label="Add to Cart" type="submit" />
        </form>
        <ReviewsContainer prodId={product.id} userId={props.userId} />
    </div>
  );
}
