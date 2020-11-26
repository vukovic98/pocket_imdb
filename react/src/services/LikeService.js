import ApiService from './ApiService';

const ENDPOINTS = {
  LIKES: '/imdb/likes/',
};

class LikeService extends ApiService {
  likeMovie = (data) => {
    return this.apiClient.post(ENDPOINTS.LIKES, data);
  }

  dislikeMovie = (id) => {
      return this.apiClient.delete(ENDPOINTS.LIKES + id + "/");
  }
}

export const likeService = new LikeService();
