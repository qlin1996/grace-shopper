import axios from 'axios'

const UPDATED_ORDER = 'UPDATED_ORDER'
const GET_ORDER = 'GET_ORDER'

export const updatedOrder = order => ({
  type: UPDATED_ORDER,
  order
})

export const getOrder = order => ({
  type: GET_ORDER,
  order
})

export const getNewOrder = userId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/orders/user/${userId}`)
    return dispatch(getOrder(data))
  } catch (error) {
    console.log(error)
  }
}

export const submitOrderAndUpdate = (id, updatedOrderObj) => async dispatch => {
  try {
    const {data} = await axios.patch(`/api/orders/${id}`, updatedOrderObj)
    return dispatch(updatedOrder(data))
  } catch (error) {
    console.error(error)
  }
}

export default function orderReducer(state = {}, action) {
  switch (action.type) {
    case UPDATED_ORDER:
      return action.order
    case GET_ORDER:
      return action.order
    default:
      return state
  }
}
