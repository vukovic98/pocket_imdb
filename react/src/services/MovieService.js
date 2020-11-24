import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/imdb/movies/',
  COMMENTS: '/imdb/comments?movie='
};

class MovieService extends ApiService {
  getMovies = () => {
    return this.apiClient.get(ENDPOINTS.MOVIES);
  };

  getMovieById =  id => {
    return this.apiClient.get(ENDPOINTS.MOVIES + id + "/")
  }

}

export const movieService = new MovieService();
