import React from 'react';
import Loader from '../component/Loader';
import MovieCard from '../component/MovieCard';

export default function MovieList({movies}) {
    return(
        <div className="Movies_DIV mt-3 row text-center pr-0">
          <Loader isLoading={!movies}>
            {() => <>{movies.map(movie => {
              return <MovieCard key={movie.id} movie={movie}/>
            })}</>}
          </Loader>
        </div>
    );
}