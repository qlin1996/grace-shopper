import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import {Link} from 'react-router-dom'
import getUserInfo from '../store/user.js'

class Products extends Component {
  constructor() {
    super()
    this.state = {
      currentPageNum: 1,
      productsPerPage: 5
    }
    this.paginate = this.paginate.bind(this)
  }

  componentDidMount() {
    this.props.getProducts()
    console.log(this.props, 'PROPS')
  }

  paginate(pageNum) {
    this.setState(prevState => ({
      currentPageNum: pageNum,
      productsPerPage: prevState.productsPerPage
    }))
  }

  render() {
    // products per page
    const indexOfLastProduct =
      this.state.currentPageNum * this.state.productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - this.state.productsPerPage
    const currentProductsOnPage = this.props.products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    )

    // all page numbers
    const allPageNumbers = []
    for (
      let i = 1;
      i <= Math.ceil(this.props.products.length / this.state.productsPerPage);
      i++
    ) {
      allPageNumbers.push(i)
    }

    return (
      <div>
        <br />
        <br />
        <img
          src="/icon-logo.png"
          alt="image"
          className="icon-logo"
        /> <br /> <br /> <br /> <br /> <br />
        <br />
        {currentProductsOnPage.map(product => {
          return (
            <div key={product.id} className="individual-product">
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

        {allPageNumbers.map(number => (
          <p key={number} onClick={() => this.paginate(number)}>
            {number}
          </p>
        ))}
      </div>
    )
  }
}

// If the user is an admin, need to render the button that will say "Add a New Product"
// and make sure that it links to the newProduct component

const mapToState = state => ({
  products: state.products
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts())
})

export default connect(mapToState, mapDispatch)(Products)
