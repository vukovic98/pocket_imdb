import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER, GET_MOVIES, VERIFICATION, LOGGED_USER_DATA, OMDb_GET, EDIT_USER, CHANGE_PASSWORD, GET_MOVIE_BY_ID, GET_GENRES, FILTER_MOVIES, LIKE_MOVIE, DISLIKE_MOVIE, CREATE_MOVIE, GET_COMMENTS_FOR_MOVIE, EDIT_MOVIE, ADD_COMMENT } from '../actions/ActionTypes';
import { userLogin, userRegister, userVerification } from './AuthSagas';
import {editUser, loggedUserData} from './UserSagas';
import { genresGet, movieById, moviesGet, filterMovies, likeMovieSaga, dislikeMovieSaga, createMovieSaga, getCommentsForMovieSaga, editMovieSaga, addCommentSaga, getMovieOMDb } from './MovieSagas';
import { changePassword } from './UserSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(VERIFICATION, userVerification),
    takeLatest(LOGGED_USER_DATA, loggedUserData),
    takeLatest(EDIT_USER, editUser),
    takeLatest(CHANGE_PASSWORD, changePassword),
    takeLatest(GET_MOVIE_BY_ID, movieById),
    takeLatest(GET_GENRES, genresGet),
    takeLatest(FILTER_MOVIES, filterMovies),
    takeLatest(LIKE_MOVIE, likeMovieSaga),
    takeLatest(DISLIKE_MOVIE, dislikeMovieSaga),
    takeLatest(CREATE_MOVIE, createMovieSaga),
    takeLatest(GET_COMMENTS_FOR_MOVIE, getCommentsForMovieSaga),
    takeLatest(EDIT_MOVIE, editMovieSaga),
    takeLatest(ADD_COMMENT, addCommentSaga),
    takeLatest(OMDb_GET, getMovieOMDb)
  ]);
}
