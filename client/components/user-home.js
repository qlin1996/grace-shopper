import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
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
    console.log(event.target.value, 'EVENT.T.V')
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
    const {email} = this.props
    return (
      <div>
        <h3>Welcome, {email}</h3>
        <img src="/icon-logo.png" alt="image" className="icon-logo" />
        <div className="sidebar-buttons-div">
          <button
            type="button"
            className="sidebar-buttons"
            value="All"
            onClick={this.handleClick}
          >
            All
          </button>
          <br />
          <button
            type="button"
            className="sidebar-buttons"
            value="Computers"
            onClick={this.handleClick}
          >
            Computers
          </button>
          <br />

          <button
            type="button"
            className="sidebar-buttons"
            value="Tablets"
            onClick={this.handleClick}
          >
            Tablets
          </button>
          <br />

          <button
            type="button"
            className="sidebar-buttons"
            value="Phones"
            onClick={this.handleClick}
          >
            Phones
          </button>
          <br />

          <button
            type="button"
            className="sidebar-buttons"
            value="TVs"
            onClick={this.handleClick}
          >
            TVs
          </button>
        </div>
        {products.map(product => {
          return (
            <div key={product.id} className="individual-product-home">
              <Link to={`/products/${product.id}`}>
                <h1 className="text-effects"> Name: {product.name}</h1>
                <img src={product.imageUrl} />
                <h3 className="text-effects"> Price: {product.price}</h3>
                <h3 className="text-effects">
                  {' '}
                  Device Type: {product.category}
                </h3>
              </Link>
            </div>
          )
        })}
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
    products: state.products
  }
}
const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts())
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
