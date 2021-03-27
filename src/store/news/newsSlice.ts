import { createSlice } from '@reduxjs/toolkit'
import { FetchingStateTypes } from '../types'
import { TNewsState } from './newsTypes'

const initialState: TNewsState = {
  fetchingState: FetchingStateTypes.none,
  data: [],
  errorText: '',
}

const newsSlice = createSlice({
  name: 'NEWS',
  initialState,
  reducers: {
    setNewsData: (state, { payload }) => {
      state.data = payload.data
      state.fetchingState = FetchingStateTypes.success
    },
    newsFetching: (state) => {
      state.fetchingState = FetchingStateTypes.loading
    },
    newsFetchError: (state, { payload }) => {
      state.errorText = payload.errorText
      state.fetchingState = FetchingStateTypes.failed
    },
  },
})

export const { setNewsData, newsFetching, newsFetchError } = newsSlice.actions
export const newsReducer = newsSlice.reducer
