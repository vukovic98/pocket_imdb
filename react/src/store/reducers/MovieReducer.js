import { SET_MOVIE_BY_ID, SET_MOVIES, UPDATE_MOVIES, UPDATE_EDITED_MOVIE } from '../actions/ActionTypes';

const initialState = {
  all: [],
  movie: null,
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, all: action.payload };
    case SET_MOVIE_BY_ID:
      return { ...state, movie: action.payload };
    case UPDATE_MOVIES:
      return { ...state, all: [...state.all, action.payload]};
    case UPDATE_EDITED_MOVIE:
      const newMovies = state.all.filter(movie => movie.id !== action.payload.id);

      newMovies.push(action.payload);
      
      return { ...state, all: newMovies, movie: action.payload};
    default:
      return state;
  }
};

export default movieReducer;
