import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Token'] = window.localStorage.getItem('Token');

// window.axios = axios;

export default axios;
