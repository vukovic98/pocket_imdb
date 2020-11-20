import ApiService from './ApiService';

const ENDPOINTS = {
  LOGGED_USER: '/user/sessionUser/'
};

class UserService extends ApiService {

  constructor() {
    super();
    this.init();
  }

  init = () => {
    
    const user = localStorage.getItem('user');
  
    if (user) { 
        console.log(user);
        const userJson = JSON.parse(user);
        const token = userJson.access;
        this.api.attachHeaders({
          Authorization: `Bearer ${token}`
        });
    }
  };

  loggedUserData = () => {
    return this.apiClient.get(ENDPOINTS.LOGGED_USER);
  };
}

export const userService = new UserService();
