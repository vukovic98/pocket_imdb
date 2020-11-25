import { GET_MOVIES, SET_MOVIE_BY_ID, SET_MOVIES, GET_MOVIE_BY_ID } from './ActionTypes';

export const getMovies = () => {
  return {
    type: GET_MOVIES
  };
};

export const getMovieById = (id) => {
  return {
    type: GET_MOVIE_BY_ID,
    payload: id
  };
};

export const setMovieById = payload => {
  return {
    type: SET_MOVIE_BY_ID,
    payload
  };
};

export const setMovies = payload => {
  return {
    type: SET_MOVIES,
    payload
  };
};
