import { createSlice } from '@reduxjs/toolkit'
import { FetchingStateTypes } from '../types'
import { TTicketsState } from './ticketsTypes'

const initialState: TTicketsState = {
  fetchingState: FetchingStateTypes.none,
  data: [
    // {
    //   id: 0,
    //   subject: 'Заклинило дверь в подъезде',
    //   text: 'string',
    //   surname: 'Климкин',
    //   name: 'Остап',
    //   patronymic: 'Гегелевич',
    //   phone: 'string',
    //   email: 'user@example.com',
    //   created_at: '2021-03-18T14:39:16.554Z',
    //   completed_at: '2021-03-18T14:39:16.554Z',
    //   status: 'new',
    //   user: 0,
    //   performer: 0,
    //   attachment: 'string',
    //   address: {
    //     id: 0,
    //     street: 'ул. Ленина',
    //     house: '15',
    //     building: 'building',
    //     apartment: '12',
    //     user: 0,
    //   },
    // },
  ],
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
