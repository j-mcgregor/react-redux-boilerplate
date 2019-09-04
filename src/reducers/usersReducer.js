import { GET_USER_SUCCESS, GET_USER_STARTED, GET_USER_FAILED, GET_USERS_FAILED, GET_USERS_SUCCESS, GET_USERS_STARTED } from '../constants/actionTypes';

const initialState = {
  loading: false,
  users: [],
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_STARTED:
      return {
        ...state,
        loading: true
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case GET_USER_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload
      }
    case GET_USERS_STARTED:
      return {
        ...state,
        loading: true
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      }
    case GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload
      }
    default:
      return state
  }
}
