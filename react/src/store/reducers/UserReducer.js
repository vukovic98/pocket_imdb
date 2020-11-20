import { SET_USER } from '../actions/ActionTypes';

const initialState = {
  userData: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};

export default userReducer;
