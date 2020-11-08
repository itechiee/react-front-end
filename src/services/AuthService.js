import axios from "axios";

const API_URL =  process.env.REACT_APP_API_URL;

class AuthService {
  login(username, password) {
    console.log(API_URL);
    return axios.post(API_URL + "/users/v1/login", {
        "username" : username,
        "password" : password,
        "device_id" : "123123"
      })
      .then(response => {
        if(response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getAllUser() {
    let token = this.getToken();
    if(!token) {
      console.log('Token not found');
    } else {
      return axios.get(API_URL + "/users", {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      })
      .then(res => {
        return res.data.response;
      })
      .catch(error => {
        console.log(error);
      })
    }    
  }

  getToken() {
    let userData = this.getCurrentUser();
    return (userData.token !== '') ? userData.token : '';
  }
}

export default new AuthService();