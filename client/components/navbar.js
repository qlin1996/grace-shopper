import React, {useEffect, Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

// make sure to put an empty array after the useeffect

const Navbar = ({handleClick, user, isLoggedIn}) => {
  const admin = user.isAdmin || ''
  return (
    <div>
      <img src="/full-logo.png" alt="image" className="nav-logo" />
      <nav>
        {isLoggedIn && admin === 'yes' ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/shipping-billing">Shipping</Link>
            <Link to="/about">About Us</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/all-users">Edit Users</Link>
            <a href="/home" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : isLoggedIn && admin === 'no' ? (
          <div>
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/shipping-billing">Shipping</Link>
            <Link to="/about">About Us</Link>
            <Link to="/cart">Cart</Link>
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
            <Link to="/cart">Cart</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user
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
