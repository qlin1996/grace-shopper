import axios from 'axios'
const GET_PRODUCT = 'GET_PRODUCT'
const EDIT_PRODUCT = 'EDIT_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'

export const getProduct = id => ({
  type: GET_PRODUCT,
  id
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
export default function productSingleReducer(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.id
    case EDIT_PRODUCT:
      return action.product
    case DELETE_PRODUCT:
      return [...state.filter(product => product.id !== Number(action.id))]
    default:
      return state
  }
}
