import React from 'react';
import ReviewsContainer from '../containers/ReviewsContainer';
import {RaisedButton, TextField} from 'material-ui';

const style = {
  margin: 12
};

export default function Product (props) {
  const product = props.product;

  return (
    <div className="product">
      <div>
        <h3>{ product.title }</h3>
        <img src={ product.imageUrl } className="img-thumbnail" />
        <h4> {product.description} </h4>
        <form name="AddToCartButton" onSubmit={props.handleSubmit} >
          <TextField name="quantity" defaultValue="1" floatingLabelText="Quantity" />
          <RaisedButton value={props.cartId} name="button" label="Add to Cart" style={style} type="submit" />
        </form>
        <ReviewsContainer />
      </div>
    </div>
  );
}
