import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import users from './usersReducer';
import theme from './themeReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  users,
  theme,
});

export default rootReducer;
