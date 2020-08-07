import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Cart extends Component {
  render() {
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

export default connect(null)(Cart)
