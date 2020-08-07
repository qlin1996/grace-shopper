import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const updateCurrentUser = user => ({type: UPDATE_CURRENT_USER, user})

/**
 * THUNK CREATORS
 */
export const getUserInfo = userId => async dispatch => {
  try {
    const res = await axios.get(`api/users/${userId}`)
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const me = () => async dispatch => {
  try {
    // const res = await axios.get('/auth/me')
    if (res.data) {
      dispatch(getUser(res.data))
    } else {
      return
    }
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const updateUser = (id, body) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/users/${id}`, body)
    dispatch(updateCurrentUser(data))
  } catch (error) {
    console.error(error)
  }
}
/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case UPDATE_CURRENT_USER:
      return action.user
    default:
      return state
  }
}
