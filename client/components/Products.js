import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import {Link} from 'react-router-dom'

class Products extends Component {
  componentDidMount() {
    this.props.getProducts()
  }
  render() {
    return (
      <div>
        {this.props.products.map(product => {
          return (
            <div key={product.id}>
              <Link to={`/products/${product.id}`}>
                <h1> Name: {product.name}</h1>
                <img src={product.imageUrl} />
                <h3> Price: {product.price}</h3>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapToState = state => ({
  products: state.products
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts())
})

export default connect(mapToState, mapDispatch)(Products)
