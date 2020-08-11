import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import {Link} from 'react-router-dom'
import {getUserInfo} from '../store/user'

class Products extends Component {
  componentDidMount() {
    this.props.getProducts()
    this.props.getUser(this.props.user.id)
  }
  render() {
    const admin = this.props.user.isAdmin
    // console.log('this.props.user >>>> ', this.props.user);
    // console.log('admin >>>> ', this.props.user.isAdmin);
    return (
      <div>
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
        {admin === 'yes' ? (
          <div>
            <Link to="/new-product" id="sign-up">
              Add New Product
            </Link>
          </div>
        ) : (
          <div />
        )}
      </div>
    )
  }
}

// If the user is an admin, need to render the button that will say "Add a New Product"
// and make sure that it links to the newProduct component

const mapToState = state => ({
  products: state.products,
  user: state.user
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts()),
  getUser: userId => dispatch(getUserInfo(userId))
})

export default connect(mapToState, mapDispatch)(Products)
