import React from 'react';
import {Image} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';

const MovieCard = ({ movie }) => {

  const history = useHistory();

  const travel = () => {
    history.push('/movie/' + movie.id);
  }

  return (
      <div className="col-md-3 fl-left padding-border mr-1 bg-white shadow mt-1" onClick={() => travel()}>
        <div className="image_DIV text-center pt-3">
          <Image 
            src={movie.image}
            height='250'
            width='210'
          />
        </div>
        <div className="data_DIV text-center">
          <h3>{movie.title}</h3>
          <i className="far fa-eye"></i> {movie.times_viewed}
          <p className="text-muted w-100">{movie.description.slice(0, 50)} ... <Link to={"/movie/" + movie.id}>Read more ..</Link></p>
        </div>
      </div>
  );
};

export default MovieCard;
