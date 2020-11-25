import { call, put } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';
import { setMovieById, setMovies } from '../actions/MovieActions';

export function* moviesGet() {
  try {
    const { data } = yield call(movieService.getMovies);

    yield put(setMovies(data));
  } catch (error) {
    alert("Something went wrong!");
    console.log({ error }); 
  }
}

export function* movieById(action) {
  try {
    const {data} = yield call(movieService.getMovieById, action.payload);

    console.log(data);

    yield put(setMovieById(data));

  } catch (error) {
    alert("Something went wrong!");
    console.log({ error }); 
  }
}
