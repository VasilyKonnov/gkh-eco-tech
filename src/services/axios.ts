import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Token'] = window.localStorage.getItem('Token');

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      window.history.pushState({}, '/login');
    }
  }
);

export default axios;
