import OMDbApiService from './OMDbApiService';
import config from '../../config';

const key = config.OMDB_API_KEY;

const ENDPOINTS = {
  MOVIE: '/?apikey=' + key + '&t='
};

class MovieService extends OMDbApiService {

  getMovie = async (title) => {
      const {data} = await this.apiClient.get(ENDPOINTS.MOVIE + title);
    
      return data;
  }

}

export const movieOMDbService = new MovieService();
