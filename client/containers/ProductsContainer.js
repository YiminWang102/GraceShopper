import Products from '../components/Products';
import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    products: state.products.list
  };
};

class ProductsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: '',
      filteredProducts: []
    }
    this.handleFilter = this.handleFilter.bind(this)
    this.getCategories = this.getCategories.bind(this)
  }

  handleFilter (event) {
    event.preventDefault()
    let filter = event.target.tag.value
    let filteredProducts = this.props.products.filter(meme => {
      return meme.category.includes(filter)
    })
    this.setState({filter, filteredProducts})
  }

  getCategories(array)  {
    const categorySet = new Set()
    const cats = []
    array.forEach(catList => {
      catList.category.split(',').forEach(eachCat => {
        cats.push(eachCat)
      })
    })
    cats.forEach(cat => {
      categorySet.add(cat)
    })
    return Array.from(categorySet)
  }

  render() {
    return (
      <Products
      {...this.props}
      filteredProducts = {this.state.filteredProducts}
      handleFilter = {this.handleFilter}
      categories = {this.getCategories} />
    )
  }
}

export default connect(
  mapStateToProps
)(ProductsContainer);
