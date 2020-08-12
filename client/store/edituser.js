import axios from 'axios'

const GET_EDIT_USER = 'GET_EDIT_USER'

const defaultUser = {}

const getEditUser = userEdit => ({type: GET_EDIT_USER, userEdit})

export const getEditUserInfo = userId => async dispatch => {
  try {
    const {data} = await axios.get(`api/users/${userId}`)
    dispatch(getEditUser(data))
  } catch (err) {
    console.error(err)
  }
}

export default function editUserReducer(state = defaultUser, action) {
  switch (action.type) {
    case GET_EDIT_USER:
      return action.userEdit
    default:
      return state
  }
}
