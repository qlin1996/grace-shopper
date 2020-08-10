import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postProduct} from '../store/products'
import {getUserInfo} from '../store/user'

class NewProduct extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    // hard coded user for now. need to pass down userId
    this.props.getUser(3)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // There might be an issue with sequelize, because i am not sure what data type these values are
  // They could be strings while sequelize will only take ints for the numbers, I have yet to test it out
  // because i want to move on and do other components
  handleSubmit(event) {
    event.preventDefault()
    const nameOfProduct = event.target.nameOfProduct.value
    const description = event.target.descriptionOfProduct.value
    const imageOfProduct = event.target.imageOfProduct.value
    const price = event.target.priceOfProduct.value
    const quantityOfProduct = event.target.quantityOfProduct.value
    const categoryOfProduct = event.target.categoryOfProduct.value
    this.props.newProduct({
      name: nameOfProduct,
      description,
      price,
      image: imageOfProduct,
      quantity: quantityOfProduct,
      category: categoryOfProduct
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit">Submit New Product</button>
        </form>
      </div>
    )
  }
}

const mapToState = state => ({
  product: state.product,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  newProduct: product => dispatch(postProduct(product)),
  getUser: userId => dispatch(getUserInfo(userId))
})

export default connect(null, mapDispatchToProps)(NewProduct)
