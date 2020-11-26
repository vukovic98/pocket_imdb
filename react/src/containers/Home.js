import React, {useEffect, useState} from 'react';
import { Jumbotron, Col, Button } from 'react-bootstrap';
import NavigationBar from '../component/NavigationBar';
import {useDispatch, useSelector} from 'react-redux';
import {getGenres, getMovies, filterMovies} from '../store/actions/MovieActions';
import {genreSelector, moviesSelector} from '../store/selectors/MovieSelector';
import MovieList from './MovieList';
import Search from '../component/Search';
import Filter from '../component/Filter';

export default function Home() {

  const dispatch = useDispatch();

  const [genre, setGenre] = useState(undefined);
  const [title, setTitle] = useState(undefined);

  useEffect(() => {
      dispatch(getMovies());
      dispatch(getGenres());
  },[]);

  const movies = useSelector(moviesSelector());
  const genres = useSelector(genreSelector());

  useEffect(() => {
    if(genre !== -1 || title !== undefined){
      const data = {
      'genreId': genre,
      'title': title
      }
      
      dispatch(filterMovies(data));
    }
    }, [genre, title])

  return(
    <div>
      <NavigationBar />
      <Jumbotron as={Col} className="ml-auto mr-auto mt-3 pt-2 col-md-10 bg-light">
        <div className="row">
          <Search searchMovieByTitle={setTitle}/>
          <Filter genres={genres} filterMoviesByGenre={setGenre}/>
        </div>
        <hr />
        <div className='text-right'>
          <Button 
            style={{'backgroundColor':'rgb(86,140,199)', 'borderColor':'rgb(86,140,199)'}}
          >
            Add Movie
          </Button>
        </div>
        {movies.length !== 0 ? <MovieList movies={movies}/> : <h2>No Movies In Database</h2>}
      </Jumbotron>
    </div>
  );
}
