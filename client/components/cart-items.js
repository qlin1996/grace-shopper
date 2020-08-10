import React, {Component} from 'react'
import {connect} from 'react-redux'
import {editItemQuantity, deleteOrderItem} from '../store/shoppingCart'

class CartItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: this.props.product.orderItem.quantity
    }

    this.minus = this.minus.bind(this)
    this.plus = this.plus.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  minus() {
    this.setState(prevState => ({
      quantity: prevState.quantity - 1
    }))
    this.props.editItemQuantity(
      this.props.product.orderItem.orderId,
      this.props.product.orderItem.productId,
      {
        quantity: this.state.quantity - 1
      }
    )
  }
  plus() {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1
    }))
    this.props.editItemQuantity(
      this.props.product.orderItem.orderId,
      this.props.product.orderItem.productId,
      {
        quantity: this.state.quantity + 1
      }
    )
  }
  handleDelete() {
    this.props.deleteOrderItem(
      this.props.product.orderItem.orderId,
      this.props.product.orderItem.productId
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.state.quantity <= 0 ? (
          <React.Fragment />
        ) : (
          <div className="individual-product">
            <h1> Name: {this.props.product.name}</h1>
            <img src={this.props.product.imageUrl} />
            <h3> Price: {this.props.product.orderItem.price}</h3>

            {this.state.quantity >= this.props.product.quantityInStock ? (
              <div>
                <p>No enough in stock. Please decrease qty to proceed.</p>
                <div className="input-group plus-minus-input">
                  <div className="input-group-button">
                    <button type="button" onClick={this.minus}>
                      -
                    </button>
                  </div>
                  <h3> Quantity: {this.props.product.quantityInStock}</h3>
                  <div className="input-group-button">
                    <button type="button">+</button>
                  </div>
                </div>
                <p>
                  {' '}
                  Total:{' '}
                  {this.props.product.price *
                    this.props.product.quantityInStock}
                </p>
              </div>
            ) : (
              <div>
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
            )}
          </div>
        )}
      </React.Fragment>
    )
  }
}

const mapToDispatch = dispatch => ({
  editItemQuantity: (orderId, productId, quantityObj) =>
    dispatch(editItemQuantity(orderId, productId, quantityObj)),
  deleteOrderItem: (orderId, productId) =>
    dispatch(deleteOrderItem(orderId, productId))
})

export default connect(null, mapToDispatch)(CartItem)
