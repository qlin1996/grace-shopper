import axios from 'axios'

const GET_ORDERS = 'GET_ORDERS'
const POST_NEW_ORDER = 'POST_NEW_ORDER'

export const getOrders = orders => ({
  type: GET_ORDERS,
  orders
})

export const postOrder = order => ({
  type: POST_NEW_ORDER,
  order
})

export const getAllOrders = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/orderItems')
    return dispatch(getOrders(data))
  } catch (error) {
    console.log(error)
  }
}

export const postNewOrder = order => async dispatch => {
  try {
    const {data} = await axios.post('/api/orders', order)
    return dispatch(postOrder(data))
  } catch (error) {
    console.log(error)
  }
}

export default function ordersReducer(state = [], action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders
    case POST_NEW_ORDER:
      return [...state, action.order]
    default:
      return state
  }
}
