import * as types from '../constants/actionTypes';

export function switchTheme(theme) {
  switch (theme) {
    case 'light':
      return function (dispatch) {
        dispatch({ type: types.CHOOSE_DARK_THEME, payload: 'dark' });
        localStorage.setItem("isDarkMode", true);
      }
    case 'dark':
      return function (dispatch) {
        dispatch({ type: types.CHOOSE_LIGHT_THEME, payload: 'light' });
        localStorage.setItem("isDarkMode", false);
      }
    default:
      break;
  }
}
