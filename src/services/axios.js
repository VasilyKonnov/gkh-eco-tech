import axios from "axios";

axios.defaults.baseURL = '';
axios.defaults.headers.common["Token"] = window.localStorage('token');

window.axios = axios;

export default axios;