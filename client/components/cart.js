import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {postToCart} from '../store/shoppingCart'
class Cart extends Component {
  componentDidMount() {
    this.props.getItems()
  }
  render() {
    console.log('THIS IS THE CART THAT IS GIVING US  PROBLEMS', this.props.cart)
    const carts = this.props.cart || []
    return (
      <div>
        <h1>Cart</h1>
        {carts.map(cart => {
          return (
            <div key={cart.id}>
              {cart.products.map(product => {
                return (
                  <div key={product.id}>
                    <h1>{product.name}</h1>
                    <img src={product.imageUrl} />
                    <h3>{product.price}</h3>
                  </div>
                )
              })}
            </div>
          )
        })}

        <Link to="./shipping-billing">
          <button type="button">Checkout</button>
        </Link>
      </div>
    )
  }
}

const mapToState = state => ({
  cart: state.cart
})
const mapDispatch = dispatch => ({
  getItems: () => {
    return dispatch(postToCart())
  }
})
export default connect(mapToState, mapDispatch)(Cart)
