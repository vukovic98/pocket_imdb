import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/imdb/movies/',
  COMMENTS: '/imdb/comments?movie=',
  GENRES: '/imdb/genres/',
  FILTER: '/imdb/movies/?',
};

class MovieService extends ApiService {
  getMovies = () => {
    return this.apiClient.get(ENDPOINTS.MOVIES);
  };

  getMovieById = id => {
    return this.apiClient.get(ENDPOINTS.MOVIES + id + "/")
  }

  getGenres = () => {
    return this.apiClient.get(ENDPOINTS.GENRES);
  }

  filterMovies = (data) => {
    if(data.genreId === '-1') data.genreId = undefined;
    let endPoint = ENDPOINTS.FILTER;
    if(data.genreId !== undefined) {
      endPoint = endPoint + "genre=" + data.genreId;
      if(data.title !== undefined) {
        endPoint = endPoint + "&title=" + data.title;
      }
    }
    else {
      if(data.title !== undefined) {
        endPoint = endPoint + "title=" + data.title;
      }
    }

    if(data.genreId === undefined && data.title === undefined)
      return this.apiClient.get(ENDPOINTS.MOVIES);
    else
      return this.apiClient.get(endPoint);
  }

}

export const movieService = new MovieService();
