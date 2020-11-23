import {CHANGE_PASSWORD, CHANGE_PASSWORD_ERROR, EDIT_USER, EDIT_USER_ERROR, LOGGED_USER_DATA, LOGGED_USER_DATA_ERROR, SET_USER} from '../actions/ActionTypes';

export const loggedUserData = () => {
    return {
      type: LOGGED_USER_DATA
    };
  };
  
  export const setUser = userData => {
    return {
      type: SET_USER,
      payload: userData
    };
  }

  export const editUser = userData => {
    return {
      type: EDIT_USER,
      payload: userData
    };
  }

  export const editUserError = message => {
    return {
      type: EDIT_USER_ERROR,
      payload: message
    };
  }

  export const changePassword = userData => {
    return {
      type: CHANGE_PASSWORD,
      payload: userData
    };
  }

  export const changePasswordError = message => {
    return {
      type: CHANGE_PASSWORD_ERROR,
      payload: message
    };
  }
  
  export const loggedUserDataError = payload => {
    return {
      type: LOGGED_USER_DATA_ERROR,
      payload: payload
    };
  };