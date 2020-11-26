import { GET_MOVIES, SET_MOVIE_BY_ID, SET_MOVIES, GET_MOVIE_BY_ID, GET_GENRES, SET_GENRES, FILTER_MOVIES, LIKE_MOVIE, DISLIKE_MOVIE, CREATE_MOVIE } from './ActionTypes';

export const getMovies = () => {
  return {
    type: GET_MOVIES
  };
};

export const createMovie = (data) => {
  return {
    type: CREATE_MOVIE,
    payload: data
  };
};

export const getGenres = () => {
  return {
    type: GET_GENRES
  };
};

export const filterMovies = (data) => {
  return {
    type: FILTER_MOVIES,
    payload: data
  };
};

export const setGenres = (payload) => {
  return {
    type: SET_GENRES,
    payload
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

export const likeMovie = payload => {
  return {
    type: LIKE_MOVIE,
    payload
  };
};

export const dislikeMovie = payload => {
  return {
    type: DISLIKE_MOVIE,
    payload
  };
};
