import ApiService from './ApiService';

const ENDPOINTS = {
  LOGIN: 'user/api/auth/login/',
  REGISTER: 'user/api/auth/register/',
  VERIFICATION: 'user/api/auth/verify/',
  LOGOUT: 'user/logout',
  USER_DATA: 'user/users?username='
}

class AuthService extends ApiService {
  constructor() {
    super();
    this.init();
  }

  init = () => {
    
    const user = this.getUser();
    const token = this.getToken();

    if (token && user) {
      this.setAuthorizationHeader();

      this.api.setUnauthorizedCallback(this.destroySession.bind(this));
    }
  };

  setAuthorizationHeader = () => {
    const token = this.getToken();
    if (token) {
      this.api.attachHeaders({
        Authorization: `Bearer ${token.access_token}`
      });
    }
  };

  createSession = user => {
    localStorage.setItem('user', JSON.stringify(user));
    this.apiClient.interceptors.request.use(function (config) {
      const user = localStorage.getItem('user');
      const token = user ? 'Bearer ' + JSON.parse(user).access : undefined;

      if(token){
        config.headers.Authorization =  token;
      }
    
        return config;
    });
  };

  destroySession = () => {
    localStorage.clear();
    this.api.removeHeaders(['Authorization']);
  };

  login = async loginData => {
    const { data } = await this.apiClient.post(ENDPOINTS.LOGIN, loginData);
    this.createSession(data);
    return data;
  };

  signup = async signupData => {
    const { data } = await this.apiClient.post(ENDPOINTS.REGISTER, signupData);

    return data;
  };

  userData = async username => {
    const { data } = await this.apiClient.get(ENDPOINTS.USER_DATA + username);

    return data;
  }

  verify = async verificationData => {
    const { data } = await this.apiClient.post(ENDPOINTS.VERIFICATION, verificationData);

    return data;
  };

  logout = async () => {
    const { data } = await this.apiClient.post(ENDPOINTS.LOGOUT);
    this.destroySession();
    return { ok: true, data };
  };

  getToken = () => {
    const user = localStorage.getItem('user');
    
    return user ? JSON.parse(user).access_token : undefined;
  };

  isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user && user.access_token ? true : false;
  };

  getUser = () => {
    const user = localStorage.getItem('user');
    return JSON.parse(user);
  };

  updateUserInStorage = property => {
    const user = localStorage.getItem('user');
    let jsonUser = JSON.parse(user);
    jsonUser = { ...jsonUser, ...property };
    localStorage.setItem('user', JSON.stringify(jsonUser));
  };
}

const authService = new AuthService();
export default authService;
