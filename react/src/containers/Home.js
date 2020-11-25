import React, {useEffect} from 'react';
import { Jumbotron, Col, Button } from 'react-bootstrap';
import NavigationBar from '../component/NavigationBar';
import {useDispatch, useSelector} from 'react-redux';
import {getMovies} from '../store/actions/MovieActions';
import {moviesSelector} from '../store/selectors/MovieSelector';
import MovieList from './MovieList';
import Search from '../component/Search';
import Filter from '../component/Filter';

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getMovies());
  },[]);

  const movies = useSelector(moviesSelector());

  return(
    <div>
      <NavigationBar />
      <Jumbotron as={Col} className="ml-auto mr-auto mt-3 pt-2 col-md-10 bg-light">
        <div className="row">
          <Search />
          <Filter />
        </div>
        <hr />
        <div className='text-right'>
          <Button 
            style={{'backgroundColor':'rgb(86,140,199)', 'borderColor':'rgb(86,140,199)'}}
          >
            Add Movie
          </Button>
        </div>
        <MovieList movies={movies}/>
      </Jumbotron>
    </div>
  );
}
