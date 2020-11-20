import {LOGGED_USER_DATA, LOGGED_USER_DATA_ERROR, SET_USER} from '../actions/ActionTypes';

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
  
  export const loggedUserDataError = payload => {
    return {
      type: LOGGED_USER_DATA_ERROR,
      payload: payload
    };
  };