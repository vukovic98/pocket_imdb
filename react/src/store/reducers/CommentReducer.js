import { SET_COMMENTS_FOR_MOVIE } from '../actions/ActionTypes';

const initialState = {
  all: []
};
const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS_FOR_MOVIE:
      return { ...state, all: action.payload };
    default:
      return state;
  }
};

export default commentReducer;
