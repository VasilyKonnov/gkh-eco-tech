import { createSlice } from '@reduxjs/toolkit'
import { FetchingStateTypes } from '../types'
import { TTicketsState } from './ticketsTypes'

const initialState: TTicketsState = {
  fetchingState: FetchingStateTypes.none,
  data: [],
  errorText: '',
}

const ticketsSlice = createSlice({
  name: 'TICKETS',
  initialState,
  reducers: {
    setTicketsData: (state, { payload }) => {
      state.data = payload.data
      state.fetchingState = FetchingStateTypes.success
    },
    ticketsFetching: (state) => {
      state.fetchingState = FetchingStateTypes.loading
    },
    ticketsFetchError: (state, { payload }) => {
      state.errorText = payload.fetchError
      state.fetchingState = FetchingStateTypes.failed
    },
    addNewTicket: (state, { payload }) => {
      state.data = [payload.ticket, ...state.data]
    },
    setRefresh: (state) => {
      state.fetchingState = FetchingStateTypes.none
    },
  },
})

export const {
  setTicketsData,
  ticketsFetching,
  ticketsFetchError,
  addNewTicket,
  setRefresh,
} = ticketsSlice.actions
export const ticketsReducer = ticketsSlice.reducer
