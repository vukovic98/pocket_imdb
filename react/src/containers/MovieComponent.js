import React, {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { Image, Jumbotron} from 'react-bootstrap';
import {getMovieById, likeMovie, dislikeMovie, getGenres} from '../store/actions/MovieActions';
import {loggedUserData} from '../store/actions/UserActions';
import {useDispatch, useSelector} from 'react-redux';
import {genreSelector, movieSelector} from '../store/selectors/MovieSelector';
import {userSelector} from '../store/selectors/UserSelector';
import Comment from '../component/Comment';
import Loader from '../component/Loader';
import LikeComponent from '../component/LikeComponent';

export default function MovieComponent() {

    const movie = useSelector(movieSelector());
    const user = useSelector(userSelector());
    const genres = useSelector(genreSelector());

    const dispatch = useDispatch();
    const history = useHistory();
    
    const getGenre = () => {
        const g = genres.filter(genre => genre.id === movie.genre);
        
        if(g)
            return g[0].name;

        return '';
    }

    let { id } = useParams();

    useEffect(() => {
        dispatch(getMovieById(id));
        dispatch(loggedUserData());
        dispatch(getGenres());
    },[id]);

    const like = (value) => {
        
        const data = {
            'movie': movie.id,
        }
        if(value){
            dispatch(likeMovie(data));
        }
        else {
            const likeObj = user.likes.filter(like => like.user === user.id && like.movie === movie.id);
            
            dispatch(dislikeMovie(likeObj[0].id));
        }
    }

    
    console.log(user);
    return(
        <div>
            <Loader isLoading={!movie || !user}>
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
                                    <p><i className="far fa-film"></i> {getGenre()} </p>
                                    <p><i className="far fa-info"></i> {movie.description}</p>
                                </div>
                                <LikeComponent user={user} movie={movie} like={like}/>
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