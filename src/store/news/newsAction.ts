import { setNewsData, newsFetching } from './newsSlice'
import { newsApi } from '../../utils/api/news'
import { TNewsAction } from './newsTypes'

export const newsAction: TNewsAction = {
  list: () => (dispatch) => {
    dispatch(newsFetching())
    newsApi.list().then(({ data }) => {
      dispatch(setNewsData({ data: data }))
    })
  },
}
