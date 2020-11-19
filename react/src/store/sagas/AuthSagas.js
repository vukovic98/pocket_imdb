import { call, put } from 'redux-saga/effects';
import { push, go } from 'connected-react-router';

import { authUser, loginError, registerError } from '../actions/AuthActions';
import AuthService from '../../services/AuthService';

export function* userLogin({ payload }) {
  try {
    yield call(AuthService.login, payload);

    yield put(authUser(true));
    yield put(push('/home'));
    yield put(go());
  } catch (error) {
    yield put(loginError(true));
  }
}

export function* userRegister({ payload }) {
  try {
    yield call(AuthService.signup, payload);

    yield put(push('/verify'));
    yield put(go());
  } catch (error) {
    yield put(registerError(true));
  }
}

export function* userVerification({ payload }) {
  try {
    console.log("VERIFY");
    yield call(AuthService.verify, payload);

    yield put(push('/login'));
    yield put(go());
  } catch (error) {
    alert("Code is not right!");
    yield put(push('/verify'));
    yield put(go());
  }
}
