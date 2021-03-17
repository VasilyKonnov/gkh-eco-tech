import axios from 'axios';

const apiUrlWithoutToken: string[] = ['/auth/customtoken/', '/auth/mobile/'];

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Authorization'] =
  'Bearer ' + window.localStorage.getItem('Token');

axios.interceptors.request.use(function (config) {
  if (apiUrlWithoutToken.includes(config.url!)) {
    config.headers = {};
  }
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      window.history.pushState({}, '/login');
    }
  }
);

export default axios;
