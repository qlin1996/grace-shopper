import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserInfo} from '../store/user'
import {Link} from 'react-router-dom'
import {updateQuantityInStock} from '../store/singleProduct'
import {getCartItems} from '../store/shoppingCart'
import {fulfillOrder} from '../store/order'

class ReviewOrder extends Component {
  componentDidMount() {
    // hard coded user for now. need to pass down userId
    this.props.getUser(this.props.user.id)
    // hard coded oderId for now. need to pass down orderId
    this.props.getItems(1)
  }

  handleClick = () => {
    this.props.cart.products.map(product => {
      const qtyObj = {
        quantityInStock: product.quantityInStock - product.orderItem.quantity
      }
      console.log(qtyObj)
      this.props.updateQuantityInStock(product.id, qtyObj)
    })
    // ORDER ID HARD CODED
    this.props.fulfillOrder(1, {isFulfilled: 'yes'})
  }

  render() {
    const user = this.props.user
    console.log('USER', user)
    const products = this.props.cart.products || []
    return (
      <div>
        <h1>Review Order</h1>

        <h2>Bill To:</h2>
        <p>{user.billingStreetAddress}</p>
        <p>
          {user.billingCity}, {user.billingState} {user.billingZipCode}
        </p>

        <h2>Ship To:</h2>
        <p>{user.shippingStreetAddress}</p>
        <p>
          {user.shippingCity}, {user.shippingState} {user.shippingZipCode}
        </p>

        <h2>Your Order:</h2>
        {products.map(product => {
          return (
            <div className="individual-product" key={product.id}>
              <h1> Name: {product.name}</h1>
              <img src={product.imageUrl} />
              <h3> Price: {product.orderItem.price}</h3>
              <h3> Quantity: {product.orderItem.quantity}</h3>
              <p> Total: {product.price * product.orderItem.quantity}</p>
            </div>
          )
        })}

        <Link to="./order-submitted">
          <button type="button" onClick={this.handleClick}>
            Submit Order
          </button>
        </Link>
      </div>
    )
  }
}

const mapToState = state => ({
  user: state.user,
  cart: state.cart
})

const mapToDispatch = dispatch => ({
  getUser: userId => dispatch(getUserInfo(userId)),
  getItems: orderId => dispatch(getCartItems(orderId)),
  updateQuantityInStock: (id, updatedQuantity) =>
    dispatch(updateQuantityInStock(id, updatedQuantity)),
  fulfillOrder: (id, isFulfilled) => dispatch(fulfillOrder(id, isFulfilled))
})

export default connect(mapToState, mapToDispatch)(ReviewOrder)
