import React from 'react';
import {Link} from 'react-router';
let productsDummy = [{
  title: 'socially awkward/awesome penguin',
  description: 'a penguin that is blue and red',
  id: 1,
  imageUrl: 'http://i.imgur.com/ObMWj5o.png',
  quantity: 4,
  price: 500,
  category: 'penguin'
},{
  title: 'spongebob meme',
  description: 'lOwErCaSe AnD UpPeRcAsE WoRdS',
  id: 2,
  imageUrl: 'http://images.complex.com/complex/images/c_limit,w_680/fl_lossy,pg_1,q_auto/bujewhyvyyg08gjksyqh/spongebob',
  quantity: 3,
  price: 1337,
  category: 'spongebob'
}
]
export default function Products (props) {

  const products = props.products;
  return (
    <div>
      <h3>Products</h3>
      <div className="row">
        {
          products && products.map(product => (
            <div className="col-xs-4" key={ product.id }>
              <Link className="thumbnail" to={`/products/${product.id}`}>

                <img src={ product.imageUrl }/>
                <div className="caption">
                  <h5>
                    <span>{ product.title }</span>
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
