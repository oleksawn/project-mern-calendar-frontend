import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.responseType = 'json';

export const unAuthorizedInstance = axios.create();
