import { createSelector } from 'reselect';

const movieStateSelector = state => state.movie;
const genreStateSelector = state => state.genre;
const commentStateSelector = state => state.comment;

export const moviesSelector = () => createSelector(movieStateSelector, movies => movies.all);
export const movieSelector = () => createSelector(movieStateSelector, movie => movie.movie);
export const genreSelector = () => createSelector(genreStateSelector, genres => genres.all);
export const genreByIdSelector = (id) => createSelector(
    genreSelector(),
    (genres) => {return genres.find((genre) => genre.id === id)}
 );
 export const commentSelector = () => createSelector(commentStateSelector, comments => comments.all);
