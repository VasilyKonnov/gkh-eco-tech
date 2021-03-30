import { createSlice } from '@reduxjs/toolkit';
import { FetchingStateTypes } from '../types';
import { TTicketsState } from './ticketsTypes';

const initialState: TTicketsState = {
  fetchingState: FetchingStateTypes.none,
  sendingTaskState: FetchingStateTypes.none,
  data: [],
  statuses: [],
  errorText: '',
};

const ticketsSlice = createSlice({
  name: 'TICKETS',
  initialState,
  reducers: {
    setTicketsData: (state, { payload }) => {
      state.data = payload.data;
      state.fetchingState = FetchingStateTypes.success;
    },
    ticketsFetching: (state) => {
      state.fetchingState = FetchingStateTypes.loading;
    },
    ticketsFetchError: (state, { payload }) => {
      state.errorText = payload.fetchError;
      state.fetchingState = FetchingStateTypes.failed;
    },
    addNewTicket: (state, { payload }) => {
      state.data = [payload.ticket, ...state.data];
      state.sendingTaskState = FetchingStateTypes.success;
    },
    ticketSending: (state) => {
      state.sendingTaskState = FetchingStateTypes.loading;
    },
    ticketSendingError: (state) => {
      state.sendingTaskState = FetchingStateTypes.failed;
    },
    setTicketStatuses: (state, { payload }) => {
      state.statuses = payload.statuses;
    },
    ticketClearStore: () => initialState,
  },
});

export const {
  setTicketsData,
  ticketsFetching,
  ticketsFetchError,
  addNewTicket,
  ticketSending,
  ticketSendingError,
  setTicketStatuses,
  ticketClearStore
} = ticketsSlice.actions;
export const ticketsReducer = ticketsSlice.reducer;
