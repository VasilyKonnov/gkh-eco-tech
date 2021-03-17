import { createSlice } from '@reduxjs/toolkit';
import { FetchingStateTypes } from '../types';
import { TMeterState } from './meterTypes';

const initialState: TMeterState = {
  fetchingState: FetchingStateTypes.none,
  types: [],
  data: [],
  errorText: '',
};

const meterSlice = createSlice({
  name: 'METER',
  initialState,
  reducers: {
    setMeterData: (state, { payload }) => {
      state.data = payload.data;
      state.fetchingState = FetchingStateTypes.success;
    },
    meterFetching: (state) => {
      state.fetchingState = FetchingStateTypes.loading;
    },
    meterFetchingError: (state, { payload }) => {
      state.fetchingState = FetchingStateTypes.failed;
      state.errorText = payload.errorText;
    },
    setMeterTypes: (state, { payload }) => {
      state.types = payload.types;
    },
  },
});

export const {
  setMeterData,
  meterFetching,
  meterFetchingError,
  setMeterTypes,
} = meterSlice.actions;
export const meterReducer = meterSlice.reducer;
