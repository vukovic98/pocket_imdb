import { call, put } from 'redux-saga/effects';
import { push, go } from 'connected-react-router';

import { setUser} from '../actions/UserActions';
import {userService} from '../../services/UserService';


export function* loggedUserData() {
    try {
      const user = yield call(userService.loggedUserData);
      
      yield put(setUser(user.data));
    } catch (error) {
      alert("Something went wrong!");
      console.log({error});
    }
}

export function* editUser({payload}) {
  try {
    yield call(userService.editUser, payload);

    yield put(push('/profile'));
    yield put(go());
  } catch (error) {
    alert("Something went wrong!");
  }
}

export function* changePassword({payload}) {
  try {
    console.log("CHANGE_PASSWORD ", payload);
    yield call(userService.changePassword, payload);

    yield put(push('/profile'));
    yield put(go());
    alert("Password successfully changed!");
  } catch (error) {
    alert("Something went wrong!");
  }
}