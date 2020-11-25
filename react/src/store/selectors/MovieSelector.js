import { createSelector } from 'reselect';

const movieStateSelector = state => state.movie;

export const moviesSelector = () => createSelector(movieStateSelector, movies => movies.all);
export const movieSelector = () => createSelector(movieStateSelector, movie => movie.movie);
