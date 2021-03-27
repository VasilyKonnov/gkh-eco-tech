import { Dispatch } from '@reduxjs/toolkit'
import { TTabNews } from '../../components/TabNews/TabNewsTypes'
import { FetchingStateTypes } from '../types'

export type TNewsState = {
  fetchingState: FetchingStateTypes
  data: TTabNews[]
  errorText: string
}

export type TNewsAction = {
  list: () => (dispatch: Dispatch) => void
}
