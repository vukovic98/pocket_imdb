import { SET_GENRES,  } from '../actions/ActionTypes';

const initialState = {
  all: []
};
const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENRES:
      return { ...state, all: action.payload };
    default:
      return state;
  }
};

export default genreReducer;
