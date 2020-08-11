import axios from 'axios'

//ACTION TYPES
const GET_PRODUCT = 'GET_PRODUCT'
const EDIT_PRODUCT = 'EDIT_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'

//ACTION CREATORS
export const getProduct = product => ({
  type: GET_PRODUCT,
  product
})

export const updateQuantity = product => ({
  type: UPDATE_QUANTITY,
  product
})
export const editProduct = (id, newInfo) => ({
  type: EDIT_PRODUCT,
  id,
  newInfo
})
export const deleteProduct = id => ({
  type: DELETE_PRODUCT,
  id
})

//THUNK CREATORS
export const fetchSingleProduct = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/products/${id}`)
    return dispatch(getProduct(data))
  } catch (error) {
    console.log(error)
  }
}
export const putProduct = (id, newInfo) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/products/${id}`, newInfo)
    return dispatch(editProduct(data))
  } catch (error) {
    console.log(error)
  }
}

export const destroyProduct = id => async dispatch => {
  try {
    await axios.delete(`/api/products/${id}`)
    return dispatch(deleteProduct(id))
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

//SINGLE PRODUCT REDUCER
export default function productSingleReducer(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.product
    case EDIT_PRODUCT:
      return action.product
    case DELETE_PRODUCT:
      return [...state.filter(product => product.id !== Number(action.id))]
    case UPDATE_QUANTITY:
      return action.product
    default:
      return state
  }
}
