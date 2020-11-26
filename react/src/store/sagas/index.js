import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER, GET_MOVIES, VERIFICATION, LOGGED_USER_DATA, EDIT_USER, CHANGE_PASSWORD, GET_MOVIE_BY_ID, GET_GENRES, FILTER_MOVIES, LIKE_MOVIE, DISLIKE_MOVIE } from '../actions/ActionTypes';
import { userLogin, userRegister, userVerification } from './AuthSagas';
import {editUser, loggedUserData} from './UserSagas';
import { genresGet, movieById, moviesGet, filterMovies, likeMovieSaga, dislikeMovieSaga } from './MovieSagas';
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
  ]);
}
