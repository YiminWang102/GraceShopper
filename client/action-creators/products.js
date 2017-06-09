import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../constants';
import { browserHistory} from 'react-router';
import axios from 'axios';

export const receiveProducts = products => {
  console.log('hit receiveProducts. products: ', products);
  return ({
    type: RECEIVE_PRODUCTS,
    products
})};

export const receiveProduct = product => {
  console.log('hit receiveProduct. product: ', product)
  return ({
    type: RECEIVE_PRODUCT,
    product
})};

export const getProductById = productId => {
  console.log('hit getProductById. productId: ', productId)
  return dispatch => {
    axios.get(`/api/products/${productId}`)
      .then(response => {
        dispatch(receiveProduct(response.data));
      });
  };
};

export const addNewProduct = (productName, productNickname) => {
  return (dispatch, getState) => {
    return axios.post('/api/products', {name: productName, nickname: productNickname})
      .then(res => res.data)
      .then(product => {
        const newListOfProducts = getState().products.list.concat([product]);
        dispatch(receiveProducts(newListOfProducts));
        // browserHistory.push('/products');
      });
  };
};

export const editProduct = (product, productId) => {
  product.id = productId;
  return (dispatch, getState) => {
    return axios.put(`/api/products/${product.id}`, product)
      .then(res => res.data)
      .then(product => {
        const newListOfProducts = getState().products.list.concat([product]);
        dispatch(receiveProducts(newListOfProducts));
        browserHistory.push(`/products`);
      });
  };
};

export const deleteProductById = (productId) => {
  return (dispatch, getState) => {
    return axios.delete(`/api/products/${productId}`)
      .then(res => res.data)
      .then(product => {
        const newListOfProducts = getState().products.list.concat([product]);
        dispatch(receiveProducts(newListOfProducts));
        browserHistory.push('/')
      });
  };
};

export const loadAllProducts = () => {
  return dispatch => {
    axios.get('/api/products')
      .then(response => {
        dispatch(receiveProducts(response.data));
      });
  };
};
