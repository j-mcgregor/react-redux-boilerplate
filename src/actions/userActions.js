import axios from 'axios';
import * as types from '../constants/actionTypes';
import mockUsers from '../mockData/users';

// example of a thunk using the redux-thunk middleware
export function getUsers() {
  return function (dispatch) {
    dispatch({ type: types.GET_USERS_STARTED });
    try {
      dispatch({ type: types.GET_USERS_SUCCESS, payload: mockUsers });

    } catch (err) {
      dispatch({ type: types.GET_USERS_FAILED, payload: err })
    }
    // axios.get('https://jsonplaceholder.typicode.com/users')
    //   .then(res => {
    //     dispatch({
    //       type: types.GET_USERS_SUCCESS,
    //       payload: res.data
    //     });
    //   })
    //   .catch(err => dispatch({ type: types.GET_USERS_FAILED, payload: err }))
  };
}
export function getUser(id) {
  return function (dispatch) {
    dispatch({ type: types.GET_USER_STARTED });
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        dispatch({
          type: types.GET_USER_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => dispatch({ type: types.GET_USER_FAILED, payload: err }))
  };
}
