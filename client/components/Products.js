import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import {Link} from 'react-router-dom'
// import getUserInfo from '../store/user.js'

class Products extends Component {
  componentDidMount() {
    this.props.getProducts()
  }
  render() {
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
        <div className="welcome-div row justify-content-center">
          <h3 className="welcome-text">VIEW ALL PRODUCTS</h3>
        </div>
        <div className="row products-row p-4">
          {this.props.products.map((product, index) => {
            let backgroundColors = [
              'individual-product-color-1',
              'individual-product-color-2',
              'individual-product-color-3',
              'individual-product-color-4'
            ]
            let chooseColor = backgroundColors[index % 4]
            return (
              <div key={product.id} className="col-4 h-100">
                <div
                  className={`individual-product-home m-1 h-100 ${chooseColor}`}
                >
                  <Link to={`/products/${product.id}`}>
                    <h1 className="text-effects"> Name: {product.name}</h1>
                    <img src={product.imageUrl} />
                    <h3 className="text-effects"> Price: {product.price}</h3>
                    <h3 className="text-effects">
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

// If the user is an admin, need to render the button that will say "Add a New Product"
// and make sure that it links to the newProduct component

const mapToState = state => ({
  products: state.products
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts())
})

export default connect(mapToState, mapDispatch)(Products)
