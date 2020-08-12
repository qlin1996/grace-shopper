import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserInfo} from '../store/user'
import {Link} from 'react-router-dom'
import {updateQuantityInStock} from '../store/singleProduct'
import {getCartItems} from '../store/shoppingCart'
import {submitOrderAndUpdate, getNewOrder} from '../store/order'
import {postNewOrder} from '../store/orders'

class ReviewOrder extends Component {
  componentDidMount() {
    // hard coded user for now. need to pass down userId
    this.props.getUser(this.props.user.id)
    // hard coded oderId for now. need to pass down orderId
    this.props.getNewOrder(this.props.user.id)
    this.props.getItems(1)
  }

  handleClick = () => {
    this.props.cart.products.map(product => {
      const qtyObj = {
        quantityInStock: product.quantityInStock - product.orderItem.quantity
      }
      this.props.updateQuantityInStock(product.id, qtyObj)
    })
    const totalInInteger = this.props.cart.products.reduce(
      (accum, currentVal) =>
        accum + currentVal.price * 100 * currentVal.orderItem.quantity,
      0
    )
    // ORDER ID HARD CODED
    this.props.submitOrderAndUpdate(1, {
      isFulfilled: 'yes',
      totalPrice: totalInInteger
    })
    this.props.postOrder({
      userId: this.props.user.id
    })
  }

  render() {
    const user = this.props.user
    console.log(this.props, 'UPDATED PROPS')
    const products = this.props.cart.products || []
    const totalInInteger = products.reduce(
      (accum, currentVal) =>
        accum + currentVal.price * 100 * currentVal.orderItem.quantity,
      0
    )
    return (
      <div>
        <h1>Review Order</h1>
        {user.billingStreetAddress !== '' ? (
          <div>
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
          </div>
        ) : (
          <div>
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
          </div>
        )}

        <h3>Cart's Total: ${totalInInteger / 100}</h3>

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
  cart: state.cart,
  order: state.order
})

const mapToDispatch = dispatch => ({
  getUser: userId => dispatch(getUserInfo(userId)),
  getItems: orderId => dispatch(getCartItems(orderId)),
  updateQuantityInStock: (id, updatedQuantity) =>
    dispatch(updateQuantityInStock(id, updatedQuantity)),
  submitOrderAndUpdate: (id, updatedOrderObj) =>
    dispatch(submitOrderAndUpdate(id, updatedOrderObj)),
  postOrder: order => dispatch(postNewOrder(order)),
  getNewOrder: userId => dispatch(getNewOrder(userId))
})

export default connect(mapToState, mapToDispatch)(ReviewOrder)
