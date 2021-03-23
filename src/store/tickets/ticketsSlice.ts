import { createSlice } from '@reduxjs/toolkit'
import { FetchingStateTypes } from '../types'
import { TTicketsState } from './ticketsTypes'

const initialState: TTicketsState = {
  fetchingState: FetchingStateTypes.none,
  data: [],
  errorText: '',
  clearForm: '',
}

const ticketsSlice = createSlice({
  name: 'TICKETS',
  initialState,
  reducers: {
    setTicketsData: (state, { payload }) => {
      state.data = payload.data
      state.fetchingState = FetchingStateTypes.success
      state.clearForm = 'success'
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
      state.clearForm = 'success'
    },
    clearFormFalse: (state) => {
      state.clearForm = 'none'
    },
    clearFormTrue: (state) => {
      state.clearForm = 'success'
    },
  },
})

export const {
  setTicketsData,
  ticketsFetching,
  ticketsFetchError,
  addNewTicket,
  clearFormFalse,
  clearFormTrue,
} = ticketsSlice.actions
export const ticketsReducer = ticketsSlice.reducer
