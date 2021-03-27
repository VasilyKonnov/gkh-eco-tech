import { TabNewsView } from './TabNewsView'
import { useDispatch, useSelector } from 'react-redux'
import { newsAction, newsSelector } from '../../store/news'
import { useCallback, useEffect, useState } from 'react'
import { FetchingStateTypes } from '../../store'

export const TabNews: React.FC = () => {
  const dispatch = useDispatch()
  const { data, fetchingState } = useSelector(newsSelector)

  useEffect(() => {
    if (fetchingState === FetchingStateTypes.none) {
      dispatch(newsAction.list())
    }
    console.log('data - ', data)
  }, [dispatch, fetchingState])

  return <TabNewsView />
}
