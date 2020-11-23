import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER, GET_MOVIES, VERIFICATION, LOGGED_USER_DATA, EDIT_USER, CHANGE_PASSWORD } from '../actions/ActionTypes';
import { userLogin, userRegister, userVerification } from './AuthSagas';
import {editUser, loggedUserData} from './UserSagas';
import { moviesGet } from './MovieSagas';
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
  ]);
}
