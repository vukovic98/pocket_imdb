import { call, put } from 'redux-saga/effects';
//import { push, go } from 'connected-react-router';

import { setUser} from '../actions/UserActions';
import {userService} from '../../services/UserService';


export function* loggedUserData() {
    try {
      console.log("USER_DATA");
      const user = yield call(userService.loggedUserData);
      console.log(user);
  
      yield put(setUser(user));
    } catch (error) {
      alert("Something went wrong!");
      // yield put(push('/login'));
      // yield put(go());
    }
  }