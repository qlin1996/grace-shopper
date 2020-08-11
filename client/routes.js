import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  About,
  Shipping,
  ReviewOrder,
  OrderSubmitted,
  NewProduct
} from './components'
import {me} from './store'
import Products from './components/Products'
import singleProduct from './components/singleProduct'
import Cart from './components/cart'
import AllUsers from './components/allUsers'
import SingleUser from './components/singleUser'
/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
        {/* <Route path="/" component={Products} /> */}
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={singleProduct} />
        <Route exact path="/shipping-billing" component={Shipping} />
        <Route exact path="/review-order" component={ReviewOrder} />
        <Route exact path="/order-submitted" component={OrderSubmitted} />
        <Route exact path="/new-product" component={NewProduct} />
        <Route exact path="/all-users" component={AllUsers} />
        <Route exact path="/users/:id" component={SingleUser} />
        <Route path="/home" component={UserHome} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
