import axios from 'axios';
import config from '../config';

class HttpService {
  constructor(options = {}) {
    this.client = axios.create(options);
    this.client.interceptors.response.use(this.handleSuccessResponse, this.handleErrorResponse);
    this.unauthorizedCallback = () => {};
    
    this.client.interceptors.request.use(function (config) {
      const user = localStorage.getItem('user');
      const token = user ? 'Bearer ' + JSON.parse(user).access : undefined;

      if(token){
        config.headers.Authorization =  token;
      }
    
        return config;
    });
  }

  attachHeaders(headers) {
    Object.assign(this.client.defaults.headers, headers);
  }

  removeHeaders(headerKeys) {
    headerKeys.forEach(key => delete this.client.defaults.headers[key]);
  }

  handleSuccessResponse(response) {
    return response;
  }

  handleErrorResponse(error) {
    const { status } = error.response;

    switch (status) {
      case 401: {
        this.unauthorizedCallback();
        break;
      }
      default:
        break;
    }

    return Promise.reject(error);
  }

  setUnauthorizedCallback(callback) {
    this.unauthorizedCallback = callback;
  }
}

const options = {
  baseURL: config.API_BASE_URL
};
const httpService = new HttpService(options);

export default httpService;
