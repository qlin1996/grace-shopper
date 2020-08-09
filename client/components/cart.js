import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getCartItems} from '../store/shoppingCart'

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
    // ORDERID IS HARDCODED RN. NEED TO PASS DOWN AND REPLACE.
    this.props.getItems(1)
  }
  minus() {
    this.props.cart.products(item => {
      return console.log(item)
    })
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
    const products = this.props.cart.products || []
    return (
      <div>
        <h1>Cart</h1>

        {products.map(product => {
          return (
            <div key={product.id} className="individual-product">
              <h1> Name: {product.name}</h1>
              <img src={product.imageUrl} />
              <h3> Price: {product.orderItem.price}</h3>
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
              <p> Total: {product.price * product.quantity}</p>
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
  getItems: orderId => {
    return dispatch(getCartItems(orderId))
  }
})

export default connect(mapToState, mapDispatch)(Cart)
