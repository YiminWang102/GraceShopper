import React from 'react';
import ReviewsContainer from '../containers/ReviewsContainer';

const fakeProduct = {
  title: 'spongebob meme',
  description: 'lOwErCaSe AnD UpPeRcAsE WoRdS',
  id: 2,
  imageUrl: 'http://images.complex.com/complex/images/c_limit,w_680/fl_lossy,pg_1,q_auto/bujewhyvyyg08gjksyqh/spongebob',
  quantity: 3,
  price: 1337,
  category: 'spongebob'
};

export default function Product (props) {

  const product = fakeProduct;

  return (
    <div className="product">
      <div>
        <h3>{ product.title }</h3>
        <img src={ product.imageUrl } className="img-thumbnail"/>
        <h4> {product.description} </h4>
        <ReviewsContainer />
      </div>
    </div>
  );
}
