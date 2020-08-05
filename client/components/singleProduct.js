import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/singleProduct'
class Product extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id)
  }
  render() {
    const product = this.props.product
    return (
      <div>
        <h1> Name: {product.name}</h1>
        <img src={product.imageUrl} />
        <h3> Price: {product.price}</h3>
        <p> Description: {product.description}</p>
        <label htmlFor="Quantity">Quantity</label>
        <input type="number" name="Quantity" max="10" min="0" />
        <button> add to cart 🛒</button>
      </div>
    )
  }
}

const mapToState = state => ({
  product: state.product
})

const mapDispatch = dispatch => ({
  getProduct: id => dispatch(fetchSingleProduct(id))
})

export default connect(mapToState, mapDispatch)(Product)
