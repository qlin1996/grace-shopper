import axios from 'axios'

const POST_ITEM = 'POST_ITEM'

export const postItem = item => ({
  type: POST_ITEM,
  item
})

export const addToCart = item => async dispatch => {
  try {
    const {data} = await axios.post('/api/orderItems', item)

    return dispatch(postItem(data))
  } catch (error) {
    console.log(error)
  }
}
export default function cartReducer(state = [], action) {
  switch (action.type) {
    case POST_ITEM:
      return [...state, action.item]
    default:
      return state
  }
}
