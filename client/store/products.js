import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'

export const getProducts = products => ({
  type: GET_PRODUCTS,
  products
})

export const fetchProducts = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/products')
    return dispatch(getProducts(data))
  } catch (error) {
    console.log(error)
  }
}

export default function productsReducer(state = [], action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
