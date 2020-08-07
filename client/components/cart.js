import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Cart extends Component {
  componentDidMount() {}
  render() {
    console.log('Cart', this.props.cart)
    return (
      <div>
        <h1>Cart</h1>
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
const mapDispatch = dispatch => ({})
export default connect(mapToState, mapDispatch)(Cart)
