import React, {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { Image, Jumbotron} from 'react-bootstrap';
import {getMovieById} from '../store/actions/MovieActions';
import {useDispatch, useSelector} from 'react-redux';
import {movieSelector} from '../store/selectors/MovieSelector';
import Comment from '../component/Comment';
import Loader from '../component/Loader';

export default function MovieComponent() {

    const dispatch = useDispatch();
    const history = useHistory();

    let { id } = useParams();

    useEffect(() => {
        dispatch(getMovieById(id));
    },[id]);

    const movie = useSelector(movieSelector());

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