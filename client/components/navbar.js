import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <img src="/full-logo.png" alt="image" className="nav-logo" />
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/shipping-billing">Shipping</Link>
          <Link to="/about">About Us</Link>
          <Link to="/cart">
            <img
              className="cart-image"
              src="data:image/png;base64,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"
              alt="image"
            />
          </Link>
          <a href="/home" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/shipping-billing">Shipping</Link>
          <Link to="/login">LOGIN ⇋ SIGNUP</Link>
          <Link to="/about">About Us</Link>
          <Link to="/cart">
            <img
              className="cart-image"
              src="data:image/png;base64,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"
              alt="image"
            />
          </Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
