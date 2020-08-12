import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import {me} from '../store/user'
import {Link} from 'react-router-dom'
/**
 * COMPONENT
 */
class UserHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'All'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.getProducts()
  }
  handleClick(event) {
    this.setState({filter: event.target.value})
  }

  render() {
    const {filter} = this.state
    const products = this.props.products.filter(product => {
      if (filter === 'All') return product
      if (filter === 'Tablets') return product.category === 'Tablet'
      if (filter === 'Phones') return product.category === 'Phone'
      if (filter === 'Computers') return product.category === 'Computer'
      if (filter === 'TVs') return product.category === 'TV'
    })

    const user = this.props.user
    // const {email} = this.props
    return (
      <div>
        <div className="welcome-div row justify-content-center">
          {user.firstName ? (
            <h3 className="welcome-text">
              Welcome, {user.firstName} {user.lastName}
            </h3>
          ) : (
            <h3 className="welcome-text">Welcome, Guest</h3>
          )}
        </div>
        <div className="row justify-content-center">
          <div className="col-2 text-center">
            <img
              src="/icon-logo.png"
              alt="image"
              className="icon-logo img-fluid"
            />
          </div>
        </div>

        <div className="sidebar-buttons-div row d-flex justify-content-center mb-5">
          <button
            type="button"
            className=" nav-a-text individual-product-color-1 p-4 m-2"
            value="All"
            onClick={this.handleClick}
          >
            All
          </button>
          <button
            type="button"
            className="nav-a-text individual-product-color-1 p-4 m-2"
            value="Computers"
            onClick={this.handleClick}
          >
            Computers
          </button>

          <button
            type="button"
            className="nav-a-text individual-product-color-2 p-4 m-2"
            value="Tablets"
            onClick={this.handleClick}
          >
            Tablets
          </button>
          <button
            type="button"
            className="nav-a-text individual-product-color-3 p-4 m-2"
            value="Phones"
            onClick={this.handleClick}
          >
            Phones
          </button>
          <button
            type="button"
            className="nav-a-text individual-product-color-4 p-4 m-2"
            value="TVs"
            onClick={this.handleClick}
          >
            TVs
          </button>
        </div>
        <div className="row products-row p-4">
          {products.map((product, index) => {
            let backgroundColors = [
              'individual-product-color-1',
              'individual-product-color-2',
              'individual-product-color-3',
              'individual-product-color-4'
            ]
            let chooseColor = backgroundColors[index % 4]
            return (
              <div key={product.id} className=" col-4 h-100">
                <div
                  className={`individual-product-home m-1 h-100 ${chooseColor}`}
                >
                  <Link to={`/products/${product.id}`}>
                    <h1 className="text-effects"> Name: {product.name}</h1>
                    <img src={product.imageUrl} />
                    <h3 className="text-effects"> Price: {product.price}</h3>
                    <h3 className="text-effects">
                      Device Type: {product.category}
                    </h3>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    products: state.products,
    user: state.user
  }
}
const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts()),
  me: () => dispatch(me())
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
