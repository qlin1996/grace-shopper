import React, {Component} from 'react'
import {connect} from 'react-redux'
import {editItemQuantity, deleteOrderItem} from '../store/shoppingCart'

class CartItem extends Component {
  constructor(props) {
    super(props)
    this.minus = this.minus.bind(this)
    this.plus = this.plus.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  minus() {
    this.props.editItemQuantity(
      this.props.product.orderItem.orderId,
      this.props.product.orderItem.productId,
      {
        quantity: this.props.product.orderItem.quantity - 1
      }
    )
  }

  plus() {
    this.props.editItemQuantity(
      this.props.product.orderItem.orderId,
      this.props.product.orderItem.productId,
      {
        quantity: this.props.product.orderItem.quantity + 1
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
        {this.props.product.orderItem.quantity <= 0 ? (
          <React.Fragment />
        ) : (
          <div className="individual-product">
            <h1> Name: {this.props.product.name}</h1>
            <img src={this.props.product.imageUrl} />
            <h3> Price: {this.props.product.price}</h3>

            {this.props.product.orderItem.quantity >=
            this.props.product.quantityInStock ? (
              <div>
                <p>Not enough in stock. Decrease qty to continue.</p>
                <div className="input-group plus-minus-input">
                  <div className="input-group-button">
                    <button type="button" onClick={this.minus}>
                      -
                    </button>
                  </div>
                  <h3> Quantity: {this.props.product.orderItem.quantity}</h3>
                  <div className="input-group-button">
                    <button type="button">+</button>
                  </div>
                </div>
              </div>
            ) : this.props.product.orderItem.quantity === 1 ? (
              <div>
                <p>about to delete</p>
                <div className="input-group plus-minus-input">
                  <div className="input-group-button">
                    <button
                      type="button"
                      onClick={() => {
                        this.minus()
                        this.handleDelete()
                      }}
                    >
                      -
                    </button>
                  </div>
                  <h3> Quantity: {this.props.product.orderItem.quantity}</h3>
                  <div className="input-group-button">
                    <button type="button">+</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="input-group plus-minus-input">
                <div className="input-group-button">
                  <button type="button" onClick={this.minus}>
                    -
                  </button>
                </div>
                <h3> Quantity: {this.props.product.orderItem.quantity}</h3>
                <div className="input-group-button">
                  <button type="button" onClick={this.plus}>
                    +
                  </button>
                </div>
              </div>
            )}

            <p>
              {' '}
              Total:{' '}
              {this.props.product.price * this.props.product.orderItem.quantity}
            </p>
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
