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
        <div className="row justify-content-center">
          <div className="col-2 text-center">
            <img
              src="/icon-logo.png"
              alt="image"
              className="icon-logo img-fluid"
            />
          </div>
        </div>
        <div className="row products-row p-4">
          {products.map((product, index) => {
            let backgroundColors = [
              'individual-product-color-1',
              'individual-product-color-2',
              'individual-product-color-3',
              'individual-product-color-4'
            ]
            let chooseColor = backgroundColors[index % 4]
            return (
              <div key={product.id} className="col-6 h-100">
                <div
                  key={product.id}
                  className={`individual-product-home m-1 h-100 ${chooseColor}`}
                >
                  <Link to={`/products/${product.id}`}>
                    <h1 className="text-effects"> Name: {product.name}</h1>
                    <img src={product.imageUrl} />
                    <h3 className="text-effects"> Price: {product.price}</h3>
                    <img className="best-seller-star" src="/favorites.png" />
                    <h3 className="sold-out-prod-text">
                      sold {product.id * 3} this week!
                    </h3>
                    <h3 className="text-effects">
                      {' '}
                      Device Type: {product.category}
                    </h3>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
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
