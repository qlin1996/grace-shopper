import axios from 'axios'

const GET_ORDERS = 'GET_ORDERS'

export const getOrders = orders => ({
  type: GET_ORDERS,
  orders
})

export const getAllOrders = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/orderItems')
    return dispatch(getOrders(data))
  } catch (error) {
    console.log(error)
  }
}

export default function ordersReducer(state = [], action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders
    default:
      return state
  }
}
