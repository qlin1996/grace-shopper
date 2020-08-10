import axios from 'axios'

const FULFILL_ORDER = 'FULFILL_ORDER'

export const fulfilledOrder = order => ({
  type: FULFILL_ORDER,
  order
})

export const fulfillOrder = (id, isFulFilled) => async dispatch => {
  try {
    const {data} = await axios.patch(`/api/orders/${id}`, isFulFilled)
    return dispatch(fulfilledOrder(data))
  } catch (error) {
    console.error(error)
  }
}

export default function orderReducer(state = {}, action) {
  switch (action.type) {
    case FULFILL_ORDER:
      return action.order
    default:
      return state
  }
}
