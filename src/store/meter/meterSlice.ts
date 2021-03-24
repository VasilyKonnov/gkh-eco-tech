import { createSlice } from '@reduxjs/toolkit';
import { FetchingStateTypes } from '../types';
import { TMeterState } from './meterTypes';

const initialState: TMeterState = {
  fetchingState: FetchingStateTypes.none,
  types: [],
  data: [],
  errorText: '',
  visibleModalAddMeter: false,
};

const meterSlice = createSlice({
  name: 'METER',
  initialState,
  reducers: {
    setMeterData: (state, { payload }) => {
      state.data = payload.data;
      state.fetchingState = FetchingStateTypes.success;
    },
    addNewMeter: (state, { payload }) => {
      state.data = [payload.meter, ...state.data];
      state.visibleModalAddMeter = false;
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
    setVisibleModal: (state, { payload }) => {
      state.visibleModalAddMeter = payload.visible;
    },
    setRefresh: (state) => {
      state.fetchingState = FetchingStateTypes.none;
    },
  },
});

export const {
  setMeterData,
  meterFetching,
  meterFetchingError,
  setMeterTypes,
  addNewMeter,
  setVisibleModal,
  setRefresh
} = meterSlice.actions;
export const meterReducer = meterSlice.reducer;
