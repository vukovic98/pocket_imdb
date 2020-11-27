import { call, put } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';
import {likeService} from '../../services/LikeService';
import { setMovieById, setMovies, setGenres, setCommentsForMovie } from '../actions/MovieActions';
import { ADD_LIKE, REMOVE_LIKE, UPDATE_MOVIES } from '../actions/ActionTypes';

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
    const newLike = yield call(likeService.likeMovie, action.payload);
    
    if(newLike) {
      yield put({type: ADD_LIKE, payload: newLike.data});
    }
    
  } catch (error) {
    alert("Something went wrong!");
    console.log({ error }); 
  }
}

export function* dislikeMovieSaga(action) {
  try {
    yield call(likeService.dislikeMovie, action.payload);

    yield put({type: REMOVE_LIKE, payload: action.payload});

  } catch (error) {
    alert("Something went wrong!");
    console.log({ error }); 
  }
}

export function* createMovieSaga(action) {
  try {
    yield call(movieService.createMovie, action.payload);

    yield put({type: UPDATE_MOVIES, payload: action.payload});

  } catch (error) {
    alert("Something went wrong!");
    console.log({ error }); 
  }
}

export function* getCommentsForMovieSaga(action) {
  try {
    const {data} = yield call(movieService.getComments, action.payload);

    yield put(setCommentsForMovie(data));
  } catch(error) {
    console.log({error});
  }
}
