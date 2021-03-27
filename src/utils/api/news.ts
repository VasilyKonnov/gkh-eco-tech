import { axios } from '../../services'

export const newsApi = {
  list: () => axios.get('/article/'),
  byId: (pageId: string) => axios.get('/article/' + pageId),
}
