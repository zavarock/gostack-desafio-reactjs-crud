import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.17.112.76:3333',
});

export default api;
