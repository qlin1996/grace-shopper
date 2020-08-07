import React from 'react'
import {connect} from 'react-redux'

const OrderSubmitted = () => {
  return (
    <div>
      <h1>Your order has been submitted</h1>
      <p>Thank you for shopping with us</p>
    </div>
  )
}

export default connect(null)(OrderSubmitted)
