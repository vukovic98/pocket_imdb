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
