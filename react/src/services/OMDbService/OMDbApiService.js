import httpService from './HttpService';

class OMDbApiService {
  constructor() {
    this.api = httpService;
    this.apiClient = this.api.client;
  }
}

export default OMDbApiService;
