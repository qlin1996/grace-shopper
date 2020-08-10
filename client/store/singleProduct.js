import axios from 'axios'

const GET_PRODUCT = 'GET_PRODUCT'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'

export const getProduct = product => ({
  type: GET_PRODUCT,
  product
})

export const updateQuantity = product => ({
  type: UPDATE_QUANTITY,
  product
})

export const fetchSingleProduct = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/products/${id}`)
    return dispatch(getProduct(data))
  } catch (error) {
    console.log(error)
  }
}

export const updateQuantityInStock = (
  id,
  updatedQuantity
) => async dispatch => {
  try {
    const {data} = await axios.patch(`/api/products/${id}`, updatedQuantity)
    return dispatch(updateQuantity(data))
  } catch (error) {
    console.error(error)
  }
}

export default function productSingleReducer(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.product
    case UPDATE_QUANTITY:
      return action.product
    default:
      return state
  }
}
