import axios from 'axios'

const POST_ITEM = 'POST_ITEM'
const GET_ITEMS = 'GET_ITEMS'

export const postItem = item => ({
  type: POST_ITEM,
  item
})

export const getItems = items => ({
  type: GET_ITEMS,
  items
})

export const addToCart = item => async dispatch => {
  try {
    const {data} = await axios.post('/api/orderItems', item)
    return dispatch(postItem(data))
  } catch (error) {
    console.log(error)
  }
}

export const postToCart = items => async dispatch => {
  try {
    const {data} = await axios.get('/api/orderItems', items)
    return dispatch(getItems(data))
  } catch (error) {
    console.log(error)
  }
}

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case POST_ITEM:
      return [...state, action.item]
    case GET_ITEMS:
      return action.items
    default:
      return state
  }
}
