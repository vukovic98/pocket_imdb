import { LOGIN_ERROR, REGISTER_ERROR } from '../actions/ActionTypes';

const initialState = {
  loginError: false,
  registerError: false
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return { ...state, loginError: action.payload };
    case REGISTER_ERROR:
      return { ...state, registerError: action.payload };
    default:
      return state;
  }
};

export default errorReducer;
