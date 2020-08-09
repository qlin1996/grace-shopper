import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const OrderSubmitted = () => {
  return (
    <div>
      <h1>Your order has been submitted</h1>
      <p>Thank you for shopping with us</p>
      <Link to="/home">
        <button type="button">Return to Home</button>
      </Link>
    </div>
  )
}

export default connect(null)(OrderSubmitted)
