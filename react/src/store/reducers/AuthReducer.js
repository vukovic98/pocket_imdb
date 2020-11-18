import { AUTH_USER, REGISTER } from '../actions/ActionTypes';
import AuthService from '../../services/AuthService';

const authReducer = (state = AuthService.isAuthenticated(), action) => {
  console.log(action);
  switch (action.type) {
    case AUTH_USER:
      return action.payload;
    case REGISTER:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
