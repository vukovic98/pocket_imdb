import React, {useEffect} from 'react';
import { Jumbotron, Col, Form, Button } from 'react-bootstrap';
import NavigationBar from '../component/NavigationBar';
import {useDispatch, useSelector} from 'react-redux';
import {getMovies} from '../store/actions/MovieActions';
import {moviesSelector} from '../store/selectors/MovieSelector';
import MovieCard from '../component/MovieCard';

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
          <Form className='col-md-6 fl-left pr-3 pl-0'>
            <Form.Group>
              <Form.Label>Search Movie By Name</Form.Label>
              <Form.Control type="email" placeholder="eg. Terminator" />
            </Form.Group>
          </Form>
          <Form className='col-md-6 fl-right pl-0'>
            <Form.Group>
              <Form.Label>Filter Movie By Genre</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
        <hr />
        <div className='text-right'>
          <Button 
            style={{'backgroundColor':'rgb(86,140,199)', 'borderColor':'rgb(86,140,199)'}}
          >
            Add Movie
          </Button>
        </div>
        <div className="Movies_DIV mt-3 row text-center pr-0">
          {movies ? (
            movies.map(movie => {
              return <MovieCard key={movie.id} movie={movie}/>
            })
          ) : (<p>Loading...</p>)}
        </div>
      </Jumbotron>
    </div>
  );
}
