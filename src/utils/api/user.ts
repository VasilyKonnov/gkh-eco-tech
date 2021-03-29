import { axios } from '../../services';
import { TProfile } from '../../store/user';

export const userApi = {
  mobile: (post: object) => axios.post('/auth/mobile/', post),
  token: (post: object) => axios.post('/auth/customtoken/', post),
  verify: (post: object) => axios.post('/token/verify/', post),
  profile: (userId: number) => axios.get(`/profile/${userId}/`),
  changeProfile: (userId: number, profile: TProfile) =>
    axios.patch(`/profile/${userId}/`, profile),
  removeProfile: (userId: number) => axios.delete('/profile/' + userId),
};
