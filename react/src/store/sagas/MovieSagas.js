import { call, put } from 'redux-saga/effects';
import { go } from 'connected-react-router';

import { movieService } from '../../services/MovieService';
import {likeService} from '../../services/LikeService';
import { setMovieById, setMovies, setGenres } from '../actions/MovieActions';

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

    yield put(setMovieById(data));

  } catch (error) {
    alert("Something went wrong!");
    console.log({ error }); 
  }
}

export function* genresGet() {
  try {
    const {data} = yield call(movieService.getGenres);

    yield put(setGenres(data));

  } catch (error) {
    alert("Something went wrong!");
    console.log({ error }); 
  }
}

export function* filterMovies(action) {
  try {
    const {data} = yield call(movieService.filterMovies, action.payload);

    yield put(setMovies(data));

  } catch (error) {
    alert("Something went wrong!");
    console.log({ error }); 
  }
}

export function* likeMovieSaga(action) {
  try {
    yield call(likeService.likeMovie, action.payload);

    yield put(call(movieById, action.payload.movie));

  } catch (error) {
    alert("Something went wrong!");
    console.log({ error }); 
  }
}

export function* dislikeMovieSaga(action) {
  try {
    yield call(likeService.dislikeMovie, action.payload);

    console.log(action.payload.id)
    yield put(call(movieById, action.payload.movie))

  } catch (error) {
    alert("Something went wrong!");
    console.log({ error }); 
  }
}
