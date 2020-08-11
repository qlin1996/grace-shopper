import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {getCartItems} from '../store/shoppingCart'

const Navbar = ({handleClick, isLoggedIn, cart, getItems}) => {
  //HARD CODE ORDER ID
  const orderId = 1
  useEffect(() => {
    getItems(orderId)
  })

  console.log('CART', cart)
  return (
    <div>
      <img src="/full-logo.png" alt="image" className="nav-logo" />
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/bestSellers">Best Sellers</Link>
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
            <Link to="/cart">
              Cart{' '}
              {cart.products ? (
                <h1>{cart.products.length}</h1>
              ) : (
                <h1>IT DIDNT WORK</h1>
              )}
            </Link>
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
    cart: state.cart
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    getItems(orderId) {
      dispatch(getCartItems(orderId))
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
