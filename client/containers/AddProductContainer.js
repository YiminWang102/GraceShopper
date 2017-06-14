import {connect} from 'react-redux'
import AddProduct from '../components/AddProduct'
import {addNewProduct} from '../action-creators/products'

const mapDispatchToProps = dispatch => {
  return {
    handleNewProductSubmit: (event) => {
      dispatch(addNewProduct(
        {title: event.target.name.value,
        description: event.target.description.value,
        inventory: parseInt(event.target.inventory.value, 10),
        imageUrl: event.target.imageUrl.value.length ? event.target.imageUrl.value : null,
        price: parseInt(event.target.price.value, 10),
        tags: event.target.tags.value}
      ))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddProduct)
