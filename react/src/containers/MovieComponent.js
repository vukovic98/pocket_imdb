import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { Image, Jumbotron} from 'react-bootstrap';
import {getMovieById, likeMovie, dislikeMovie} from '../store/actions/MovieActions';
import {loggedUserData} from '../store/actions/UserActions';
import {useDispatch, useSelector} from 'react-redux';
import {movieSelector} from '../store/selectors/MovieSelector';
import {userSelector} from '../store/selectors/UserSelector';
import Comment from '../component/Comment';
import Loader from '../component/Loader';
import config from '../config';

export default function MovieComponent() {

    const dispatch = useDispatch();
    const history = useHistory();

    let { id } = useParams();

    useEffect(() => {
        dispatch(getMovieById(id));
        dispatch(loggedUserData());
    },[id]);

    const like = (value) => {

        const data = {
            'user': config.API_BASE_URL + "/user/users/" + user.id + "/",
            'movie': config.API_BASE_URL + "/imdb/movies/" + movie.id + "/",
        }
        if(value){
            dispatch(likeMovie(data));
        }
        else {
            //dispatch(dislikeMovie());
        }
    }

    const movie = useSelector(movieSelector());
    const user = useSelector(userSelector());
    console.log(user);
    return(
        <div>
            <Loader isLoading={!movie}>
                {() => <div>
                    <button className='m-1' onClick={history.goBack}><i className="far fa-arrow-left"></i>  Back</button>
                    <div className='Movie_Data'>
                        <Jumbotron className="col-md-8 ml-auto row mr-auto mt-3 bg-light pt-5">
                            <div className="row">
                                <Image 
                                    src={movie.image}
                                    width='200'
                                    height='300'
                                    rounded
                                    className="fl-left col-md-3"
                                />
                                <div className='fl-left ml-3 col-md-8'>
                                    <h2>{movie.title}</h2>
                                    <p><i className="far fa-eye"></i> {movie.times_viewed} people saw this movie</p>
                                    <p><i className="far fa-film"></i> {movie.genre.name} </p>
                                    <p><i className="far fa-info"></i> {movie.description}</p>
                                </div>
                                {user.likes.some(e => e.movie === movie.id) ?
                                    <span style={{'height':'17px'}} onClick={() => like(false)}><i className='fas fa-heart'></i></span>
                                    : 
                                    <span style={{'height':'17px'}} onClick={() => like(true)}><i className='far fa-heart'></i></span>
                                }
                            </div>
                            <div className='col-md-12 mt-4 pl-0 pr-0'>
                                <h3>Comments</h3>
                                {movie.comments.map(comment => {
                                    return <Comment key={comment.id} user={comment.user} content={comment.content} />
                                })}
                            </div>
                        </Jumbotron>
                    </div>
                </div>
            }   
            </Loader>
            
        </div>
    );
}