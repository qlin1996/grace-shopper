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
        <h1>{product.name}</h1>
        <img src={product.imageUrl} />
        <h3>{product.price}</h3>
        <p>{product.description}</p>
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
