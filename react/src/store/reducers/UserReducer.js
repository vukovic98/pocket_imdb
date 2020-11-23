import { SET_USER, EDIT_USER, CHANGE_PASSWORD } from '../actions/ActionTypes';

const initialState = {
  userData: {}
};

const userReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SET_USER:
      return { ...state, userData: action.payload };
    case EDIT_USER:
        return { ...state, userData: action.payload };
    case CHANGE_PASSWORD:
        return { ...state, userData: action.payload };
    default:
      return state;
  }
};

export default userReducer;
