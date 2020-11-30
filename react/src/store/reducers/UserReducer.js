import { SET_USER, EDIT_USER, CHANGE_PASSWORD, ADD_LIKE, REMOVE_LIKE } from '../actions/ActionTypes';

const initialState = {
  userData: null
};

const userReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SET_USER:
      return { ...state, userData: action.payload };
    case ADD_LIKE:
      return { ...state, userData: {...state.userData, likes: [...state.userData.likes, action.payload]}};
    case REMOVE_LIKE:
      return { ...state, userData: {...state.userData, likes: [...state.userData.likes.filter(like => like.id !== action.payload)]}};
    case EDIT_USER:
        return { ...state, userData: action.payload };
    case CHANGE_PASSWORD:
        return { ...state, userData: action.payload };
    default:
      return state;
  }
};

export default userReducer;
