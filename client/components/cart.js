import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getCartItems} from '../store/shoppingCart'
import CartItem from './cart-items'
import {getNewOrder} from '../store/order'
class Cart extends Component {
  componentDidMount() {
    // ORDERID IS HARDCODED RN. NEED TO PASS DOWN AND REPLACE.

    this.props.getItems(1)
  }

  render() {
    console.log('THIS PROPS', this.props)

    const products = this.props.cart.products || []

    // console.log('products >>> ', products);

    // const data = JSON.stringify(products);

    // console.log('data >>> ', data);

    // localStorage.setItem('data', data);
    // const savedInfo = JSON.parse(localStorage.getItem('data'));

    // console.log('savedInfo >>> ', savedInfo);

    return (
      <div>
        <h1 className="cartTotal-1">Cart</h1>

        {products.map(product => {
          return (
            <div key={product.id}>
              <CartItem product={product} />
            </div>
          )
        })}

        <h3 className="cartTotal">
          Cart's Total: $
          {products.reduce(
            (accum, currentVal) =>
              accum + currentVal.price * 100 * currentVal.orderItem.quantity,
            0
          ) / 100}
        </h3>

        {products.length ? (
          <Link to="./shipping-billing">
            <button type="button" className="checkout-1">
              Checkout
            </button>
          </Link>
        ) : (
          <button type="button" className="checkout-1">
            Checkout
          </button>
        )}
      </div>
    )
  }
}

const mapToState = state => ({
  user: state.user,
  cart: state.cart,
  order: state.order
})

const mapDispatch = dispatch => ({
  getItems: orderId => {
    return dispatch(getCartItems(orderId))
  },
  getNewOrder: userId => dispatch(getNewOrder(userId))
})

export default connect(mapToState, mapDispatch)(Cart)
