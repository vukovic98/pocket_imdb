import { SET_OMDb_MOVIE } from '../actions/ActionTypes';

const initialState = {
  OMDbMovie: null,
};
const OMDbMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OMDb_MOVIE:
      return { ...state, OMDbMovie: action.payload };
    default:
      return state;
  }
};

export default OMDbMovieReducer;
