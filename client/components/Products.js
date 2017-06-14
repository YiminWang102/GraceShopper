import React from 'react';
import {Link} from 'react-router';
// import {MenuItem, SelectField, RaisedButton} from 'material-ui'

export default function Products(props) {
  console.log(props)
  let products = props.products
  let handleFilter = props.handleFilter
  let categories = props.categories(products)
  return (
    <div>
      <h3>Products</h3>
      <form onSubmit ={handleFilter}>
        <select name="tag">
          {
            categories && categories.map(cat => {
              return <option key={cat} value = {cat}>{cat}</option>
            })
          }
          </select>
          <button type="submit">Filter Memes by Tag</button>
        </form>
      <div className="row">
        {
          products.length && props.filteredProducts.length ? props.filteredProducts.map(product => (
            <div className="col-xs-4" key={ product.id }>
              <Link className="thumbnail" to={`/products/${product.id}`}>
                <img src={ product.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ product.title }</span>
                  </h5>
                </div>
              </Link>
            </div>
          ))
          :
          products.map(product => (
            <div className="col-xs-4" key={ product.id }>
              <Link className="thumbnail" to={`/products/${product.id}`}>
                <img src={ product.imageUrl } />
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
}
