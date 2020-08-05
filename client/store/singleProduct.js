import axios from 'axios'

const GET_PRODUCT = 'GET_PRODUCT'

export const getProduct = id => ({
  type: GET_PRODUCT,
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

export default function productSingleReducer(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.id
    default:
      return state
  }
}
