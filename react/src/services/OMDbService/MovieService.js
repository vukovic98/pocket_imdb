import OMDbApiService from './OMDbApiService';

const ENDPOINTS = {
  MOVIE: '/?apikey=26da8a53&t='
};

class MovieService extends OMDbApiService {

  getMovie = async (title) => {

      const {data} = await this.apiClient.get(ENDPOINTS.MOVIE + title);
    
      return data;
  }

}

export const movieOMDbService = new MovieService();
