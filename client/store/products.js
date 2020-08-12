import axios from 'axios'
//ACTION TYPES
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'

//ACTION CREATORS
export const getProducts = products => ({
  type: GET_PRODUCTS,
  products
})
export const addProduct = product => ({
  type: ADD_PRODUCT,
  product
})

//THUNK CREATORS
export const fetchProducts = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/products')
    return dispatch(getProducts(data))
  } catch (error) {
    console.log(error)
  }
}
export const postProduct = product => async dispatch => {
  try {
    const {data} = await axios.post('/api/products', product)
    dispatch(addProduct(data))
  } catch (error) {
    console.log('error >>> ', error)
  }
}

//PRODUCT REDUCER
export default function productsReducer(state = [], action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    case ADD_PRODUCT:
      return [...state, action.product]
    default:
      return state
  }
}
