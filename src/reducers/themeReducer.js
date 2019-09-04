import { CHOOSE_DARK_THEME, CHOOSE_LIGHT_THEME } from '../constants/actionTypes';
import palette from './palette';

export default (state = palette, action) => {
  switch (action.type) {
    case CHOOSE_LIGHT_THEME:
      return {
        ...state,
        theme: action.payload
      }
    case CHOOSE_DARK_THEME:
      return {
        ...state,
        theme: action.payload
      }
    default:
      return state
  }
}
