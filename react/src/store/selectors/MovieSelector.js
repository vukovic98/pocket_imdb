import { createSelector } from 'reselect';

const movieStateSelector = state => state.movie;
const genreStateSelector = state => state.genre;

export const moviesSelector = () => createSelector(movieStateSelector, movies => movies.all);
export const movieSelector = () => createSelector(movieStateSelector, movie => movie.movie);
export const genreSelector = () => createSelector(genreStateSelector, genre => genre.all);
