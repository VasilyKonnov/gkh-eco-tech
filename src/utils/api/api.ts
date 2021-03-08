import { axios } from '../../services';

export const userApi = {
  auth: (post: object) => axios.post('/auth', post),
  verify: () => axios.get('/auth'),
};
