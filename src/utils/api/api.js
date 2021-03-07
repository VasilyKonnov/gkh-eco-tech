import { axios } from '../../services';

export const userApi = {
  auth: (post) => axios.post('/auth', post),
  verify: () => axios.get('/auth')
}