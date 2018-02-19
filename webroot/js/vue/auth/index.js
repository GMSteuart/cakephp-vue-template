import axios from 'axios';
import {assign} from 'lodash';

const GET_HEADERS = {
  'Accept': 'application/json'
};

const POST_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

export default {
  user: {
    authenticated: false
  },
  checkAuth() {
    this.user.authenticated = localStorage.getItem('token') !== null;
  },
  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    };
  },
  getHeaders() {
    return assign(GET_HEADERS, this.getAuthHeader());
  },
  login(user) {
    return axios.post(`/api/users/token`, user, {
      headers: POST_HEADERS
    })
      .then(({data}) => {
        localStorage.setItem('token', data.data.token);

        this.user.authenticated = true;

        return data.data.user;
      })
      .catch((error) => {
        return error;
      })
  },
  logout() {
    localStorage.removeItem('token');
    this.user.authenticated = false;
  },
};