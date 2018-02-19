import auth from '@/auth';
import axios from 'axios';
import { assign } from 'lodash';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

export default {
  index(controller) {
    return axios.get(`api/${controller}`, {
      headers: assign(headers, auth.getAuthHeader())
    })
      .then(({data}) => {
        return data; // should contain pagination data
      })
  },
  add(controller, form) {
    return axios.post(`api/${controller}/add`,
      form,
      { headers: assign(headers, auth.getAuthHeader()) }
    )
      .then(({data}) => {
        return data.message;
      });
  },
  edit(controller, id, form) {
    return axios.post(`api/${controller}/edit/${id}`,
      form,
      { headers: assign(headers, auth.getAuthHeader()) }
    )
      .then(({data}) => {
        return data.message;
      });
  },
  list(controller) {
    return axios.get(`api/${controller}`, {
      headers: assign(headers, auth.getAuthHeader())
    })
      .then(({data}) => {
        return data; // should contain pagination data
      })
  },
  remove(controller, id) {
    return axios.post(`api/${controller}/delete/${id}`,
      null,
      { headers: assign(headers, auth.getAuthHeader()) }
    )
      .then(({data}) => {
        return data.message;
      })
  },
  view(controller, id) {
    return axios.get(`api/${controller}/view/${id}`, {
	    headers: assign(headers, auth.getAuthHeader())
    })
      .then(({data}) => {
        return data;
      });
  }
}