import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  fetchSingleProduct,
  putProduct,
  destroyProduct
} from '../store/singleProduct'

import {addToCart} from '../store/shoppingCart'
import {render} from 'enzyme'
class Product extends Component {
  constructor() {
    super()
    this.state = {
      quantity: 1,
      toastNotification: 'false'
    }
  }
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addItem({
      price: this.props.product.price * 100,
      quantity: this.state.quantity,
      productId: this.props.product.id,
      orderId: 1
    })
    this.setState({
      toastNotification: 'true'
    })
    // confirm(
    //   `Adding ${this.state.quantity} of ${this.props.product.name} to your cart`
    // )
  }
  handleDelete = event => {
    event.preventDefault()
    this.props.deleteProduct(this.props.match.params.id)
  }

  handleUpdate = event => {
    event.preventDefault()
    const name = event.target.nameOfProduct.value
    const description = event.target.descriptionOfProduct.value
    const imageUrl = event.target.imageOfProduct.value
    const price = event.target.priceOfProduct.value
    const quantity = event.target.quantityOfProduct.value
    const category = event.target.categoryOfProduct.value
    const productId = this.props.match.params.id
    this.props.updateProduct(productId, {
      name,
      description,
      price,
      imageUrl,
      quantity,
      category
    })
  }

  render() {
    const product = this.props.product

    return (
      <div className="individual-product">
        <h1 className="text-effects"> Name: {product.name}</h1>
        <img src={product.imageUrl} />
        <h3 className="text-effects"> Price: {product.price}</h3>
        <p className="text-effects"> Description: {product.description}</p>
        <h3 className="text-effects"> Device Type: {product.category}</h3>
        <label htmlFor="Quantity" className="text-effects">
          Quantity
        </label>
        <br />
        <input
          type="number"
          name="quantity"
          max="10"
          min="0"
          value={this.state.quantity}
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.handleSubmit}>
          add to cart 🛒
        </button>
        <div>
          <button className="remove-product" onClick={this.handleDelete}>
            Delete {product.name}
          </button>
        </div>
        <div />
        <div>
          <h1>Update {product.name}'s Information</h1>
          <div>
            <form onSubmit={this.handleUpdate}>
              <label>
                Name of Product:
                <input
                  type="text"
                  name="nameOfProduct"
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Description of Product:
                <input
                  type="text"
                  name="descriptionOfProduct"
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Price of Product:
                <input
                  type="text"
                  name="priceOfProduct"
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Image of Product:
                <input
                  type="text"
                  name="imageOfProduct"
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Quantity of Product:
                <input
                  type="text"
                  name="quantityOfProduct"
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Category of Product:
                <input
                  type="text"
                  name="categoryOfProduct"
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
            {this.state.toastNotification === 'true' ? (
              <div className="toast-notification">
                <p>
                  {' '}
                  Adding
                  <p className="toast-text">{`${this.state.quantity}`}</p> of
                  <p className="toast-text">{`${this.props.product.name}`}</p>
                  to your cart
                </p>
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapToState = state => ({
  product: state.product
})

const mapDispatch = dispatch => ({
  getProduct: id => dispatch(fetchSingleProduct(id)),
  addItem: item => dispatch(addToCart(item)),
  updateProduct: (id, newInfo) => dispatch(putProduct(id, newInfo)),
  deleteProduct: id => dispatch(destroyProduct(id))
})

export default connect(mapToState, mapDispatch)(Product)
