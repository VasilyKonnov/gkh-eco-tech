import { axios } from '../../services'

export const newsApi = {
  list: () => axios.get('/article/'),
}
