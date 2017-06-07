import React from 'react';
import {Link} from 'react-router';
let productsDummy = [{
  name: 'dank meme',
  id: 1,
  imageUrl: 'http://i.imgur.com/ObMWj5o.png'
}]
export default function Products (props) {

  const products = productsDummy;
  return (
    <div>
      <h3>Products</h3>
      <div className="row">
        {
          products && products.map(product => (
            <div className="col-xs-4" key={ product.id }>
              <Link className="thumbnail" to={`/products/`}>

                <img src={ product.imageUrl }/>
                <div className="caption">
                  <h5>
                    <span>{ product.name }</span>
                  </h5>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};
