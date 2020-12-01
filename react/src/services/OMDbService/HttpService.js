import axios from 'axios';

class HttpService {
  constructor(options = {}) {
    this.client = axios.create(options);
  }

  attachHeaders(headers) {
    Object.assign(this.client.defaults.headers, headers);
  }

  removeHeaders(headerKeys) {
    headerKeys.forEach(key => delete this.client.defaults.headers[key]);
  }
}

const options = {
  baseURL: 'http://www.omdbapi.com'
};
const httpService = new HttpService(options);

export default httpService;
