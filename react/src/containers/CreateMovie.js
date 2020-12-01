import React, { useEffect } from 'react';
import { Col, Jumbotron } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { createMovie, getGenres } from '../store/actions/MovieActions';
import MovieDataForm from './MovieDataForm';
import { omdbMovieSelector } from '../store/selectors/MovieSelector';
import { getOMDbMovie } from '../store/actions/MovieActions';

export default function CreateMovie() {

    const history = useHistory();
    const dispatch = useDispatch();

    
    const omdbMovie = useSelector(omdbMovieSelector());

    const emptyMovie = {id: '', title: '', description: omdbMovie?JSON.stringify(omdbMovie).slice(0, 500):'', image: '', genre: '', times_viewed: 0, comments: []};

    useEffect(() => {
        dispatch(getGenres());
      },[]);

    const handleCreate = (values) => {
        dispatch(createMovie(values));
    }

    const onTitleEnter = (title) => {
        dispatch(getOMDbMovie(title));
        console.log(omdbMovie);
    }

    return(
        <div>
            <div>
                <button className='m-1' onClick={history.goBack}><i className="far fa-arrow-left"></i>  Back</button>
            </div>
            <div>
                <Jumbotron as={Col} className="col-md-10 bg-light ml-auto mr-auto mt-3 pt-4">
                    <MovieDataForm movie={emptyMovie} action={handleCreate} title={"Add movie"} onTitleEnter={onTitleEnter}/>
                </Jumbotron>
            </div>
        </div>
    );
}