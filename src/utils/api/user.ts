import { axios } from '../../services'

export const userApi = {
  mobile: (post: object) => axios.post('/auth/mobile/', post),
  token: (post: object) => axios.post('/auth/customtoken/', post),
  verify: (post: object) => axios.post('/token/verify/', post),
  profile: (userId: number) => axios.get(`/profile/${userId}`),
}
