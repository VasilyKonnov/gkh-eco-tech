import { TabNewsView } from './TabNewsView'
import { useDispatch, useSelector } from 'react-redux'
import { newsAction, newsSelector } from '../../store/news'
import { useEffect, useState } from 'react'
import { FetchingStateTypes } from '../../store'
import { TNew, TArticlePage } from './TabNewsTypes'
import { useParams } from 'react-router'
import { Article } from '../Article'

export const TabNews: React.FC = () => {
  const dispatch = useDispatch()
  const { data, fetchingState } = useSelector(newsSelector)
  const [newsContent, setNewsContent] = useState<TNew[]>()
  const [firstNew, setFirstNew] = useState<TNew>()
  const { id } = useParams<TArticlePage>()

  useEffect(() => {
    if (fetchingState === FetchingStateTypes.none) {
      dispatch(newsAction.list())
    }
    if (data) {
      // @ts-ignore
      setNewsContent(data.results)
    }
    if (newsContent) {
      // @ts-ignore
      setFirstNew(newsContent.slice(0, 1)[0])
    }
  }, [data, dispatch, fetchingState, newsContent])

  return id ? (
    <Article page={id} />
  ) : (
    <TabNewsView newsContent={newsContent} firstNew={firstNew} />
  )
}
