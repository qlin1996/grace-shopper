import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchProducts} from '../store/products'
class bestSellers extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    const products = this.props.products.filter(product => {
      if (product.id % 2 === 0) {
        return product
      }
    })
    return (
      <div>
        <br />
        <br />
        <img
          src="/icon-logo.png"
          alt="image"
          className="icon-logo"
        /> <br /> <br /> <br /> <br /> <br />
        <br />
        {products.map(product => {
          return (
            <div key={product.id} className="individual-product">
              <Link to={`/products/${product.id}`}>
                <h1 className="text-effects"> Name: {product.name}</h1>
                <img src={product.imageUrl} />
                <h3 className="text-effects"> Price: {product.price}</h3>
                <img
                  className="best-seller-star"
                  src="https://i.dlpng.com/static/png/6573039_preview.png"
                />
                <h3 className="sold-out-prod-text">
                  sold {product.id * 3} this week!
                </h3>
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

export default connect(mapToState, mapDispatch)(bestSellers)
