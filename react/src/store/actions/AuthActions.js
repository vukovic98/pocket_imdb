import { LOGIN, AUTH_USER, REGISTER, LOGIN_ERROR, REGISTER_ERROR, VERIFICATION, VERIFICATION_ERROR, USER_DATA, USER_DATA_ERROR } from './ActionTypes';

export const logIn = logInData => {
  return {
    type: LOGIN,
    payload: logInData
  };
};

export const register = registerData => {
  return {
    type: REGISTER,
    payload: registerData
  };
};

export const verify = verifyData => {
  return {
    type: VERIFICATION,
    payload: verifyData
  };
};

export const userData = data => {
  return {
    type: USER_DATA,
    payload: data
  };
};

export const userDataError = payload => {
  return {
    type: USER_DATA_ERROR,
    payload: payload
  };
};

export const verifyError = payload => {
  return {
    type: VERIFICATION_ERROR,
    payload: payload
  };
};

export const authUser = payload => {
  return {
    type: AUTH_USER,
    payload
  };
};

export const loginError = payload => {
  return {
    type: LOGIN_ERROR,
    payload
  };
};

export const registerError = payload => {
  return {
    type: REGISTER_ERROR,
    payload
  };
};
