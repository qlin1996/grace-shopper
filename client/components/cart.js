import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllOrders} from '../store/orders'
class Cart extends Component {
  constructor() {
    super()
    this.state = {
      click: 0
    }
    this.minus = this.minus.bind(this)
    this.plus = this.plus.bind(this)
  }
  componentDidMount() {
    this.props.getItems()
  }
  minus() {
    this.setState({
      clicks: this.state.clicks - 1
    })
  }
  plus() {
    this.setState({
      clicks: this.state.clicks - 1
    })
  }
  render() {
    console.log('THIS IS THE CART THAT IS GIVING US PROBLEMS', this.props.cart)
    const carts = this.props.cart || []
    return (
      <div>
        <h1>Cart</h1>
        {carts.map(cart => {
          return (
            <div key={cart.id}>
              {cart.products.map(product => {
                return (
                  <div key={product.id} className="individual-product">
                    <h1> Name: {product.name}</h1>
                    <img src={product.imageUrl} />
                    <h3> Price: {product.price}</h3>
                    <div className="input-group plus-minus-input">
                      <div className="input-group-button">
                        <button type="button" onClick={this.minus}>
                          -
                        </button>
                      </div>
                      <h3> Quantity: {product.orderItem.quantity}</h3>
                      <div className="input-group-button">
                        <button type="button" onChange={this.plus}>
                          +
                        </button>
                      </div>
                    </div>
                    <p> Total: {product.price * product.orderItem.quantity}</p>
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
  cart: state.orders
})
const mapDispatch = dispatch => ({
  getItems: () => {
    return dispatch(getAllOrders())
  }
})
export default connect(mapToState, mapDispatch)(Cart)
