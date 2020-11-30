import ApiService from './ApiService';

const ENDPOINTS = {
  LOGGED_USER: '/user/sessionUser/',
  USER_CRUD: '/user/users/'
};

class UserService extends ApiService {

  constructor() {
    super();
    this.init();
  }

  init = () => {

    this.apiClient.interceptors.request.use(function (config) {
      const user = localStorage.getItem('user');
      const token = user ? 'Bearer ' + JSON.parse(user).access : undefined;

      if(token){
        config.headers.Authorization =  token;
      }
    
        return config;
    });
    
  };

  loggedUserData = () => {
    return this.apiClient.get(ENDPOINTS.LOGGED_USER);
  };

  editUser = async values => {
    const formData = new FormData();

    formData.append("first_name", values.first_name);
    formData.append("last_name", values.last_name);

    if(values.image !== undefined)
      formData.append("image", values.image);

    const {user} = await this.apiClient.patch(ENDPOINTS.USER_CRUD + values.id + "/", formData);

    return user;
  };

  changePassword = async values => {
    console.log("UDJE");
    const formData = new FormData();

    formData.append("password", values.password);

    const {user} = await this.apiClient.patch(ENDPOINTS.USER_CRUD + values.id + "/", formData);
    console.log("VRATI");
    return user;
  }
}

export const userService = new UserService();
