import React, {Component} from 'react'
import {connect} from 'react-redux'
import {editItemQuantity} from '../store/shoppingCart'

class CartItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: this.props.product.orderItem.quantity
    }

    this.minus = this.minus.bind(this)
    this.plus = this.plus.bind(this)
  }

  minus() {
    this.setState(prevState => ({
      quantity: prevState.quantity - 1
    }))
    this.props.editItemQuantity(
      this.props.product.orderItem.orderId,
      this.props.product.orderItem.productId,
      {quantity: this.state.quantity - 1}
    )
  }
  plus() {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1
    }))
    this.props.editItemQuantity(
      this.props.product.orderItem.orderId,
      this.props.product.orderItem.productId,
      {quantity: this.state.quantity + 1}
    )
  }

  render() {
    return (
      <div className="individual-product">
        <h1> Name: {this.props.product.name}</h1>
        <img src={this.props.product.imageUrl} />
        <h3> Price: {this.props.product.orderItem.price}</h3>
        <div className="input-group plus-minus-input">
          <div className="input-group-button">
            <button type="button" onClick={this.minus}>
              -
            </button>
          </div>
          <h3> Quantity: {this.state.quantity}</h3>
          <div className="input-group-button">
            <button type="button" onClick={this.plus}>
              +
            </button>
          </div>
        </div>
        <p> Total: {this.props.product.price * this.state.quantity}</p>
      </div>
    )
  }
}

const mapToDispatch = dispatch => ({
  editItemQuantity: (orderId, productId, quantityObj) =>
    dispatch(editItemQuantity(orderId, productId, quantityObj))
})

export default connect(null, mapToDispatch)(CartItem)
