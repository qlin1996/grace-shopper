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
            <div key={product.id} className="individual-product">
              <Link to={`/products/${product.id}`}>
                <h1 className="text-effects"> Name: {product.name}</h1>
                <img src={product.imageUrl} />
                <h3 className="text-effects"> Price: {product.price}</h3>
                <h3 className="text-effects">
                  {' '}
                  Device Type: {product.category}
                </h3>
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
