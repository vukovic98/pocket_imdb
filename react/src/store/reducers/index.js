import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from './AuthReducer';
import errorReducer from './ErrorReducer';
import movieReducer from './MovieReducer';
import userReducer from './UserReducer';

export default history =>
  combineReducers({
    authUser: authReducer,
    userReducer: userReducer,
    error: errorReducer,
    movie: movieReducer,
    router: connectRouter(history)
  });
