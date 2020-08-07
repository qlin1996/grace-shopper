import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserInfo} from '../store/user'
import {Link} from 'react-router-dom'

class ReviewOrder extends Component {
  componentDidMount() {
    // hard coded user for now. need to pass down userId
    this.props.getUser(1)
  }

  render() {
    const user = this.props.user
    console.log('USER', user)
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
        <p>{}</p>

        <Link to="./order-submitted">
          <button type="button">Submit Order</button>
        </Link>
      </div>
    )
  }
}

const mapToState = state => ({
  user: state.user
})

const mapToDispatch = dispatch => ({
  getUser: userId => dispatch(getUserInfo(userId))
})

export default connect(mapToState, mapToDispatch)(ReviewOrder)
