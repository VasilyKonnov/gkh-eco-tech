import { createSlice } from '@reduxjs/toolkit';
import { FetchingStateTypes } from '../types';
import { TPriceState } from './priceTypes';

const initialState: TPriceState = {
  fetchingState: FetchingStateTypes.none,
  data: [],
  errorText: '',
};

const priceSlice = createSlice({
  name: 'PRICE',
  initialState,
  reducers: {
    setPriceData: (state, { payload }) => {
      state.data = payload.data;
      state.fetchingState = FetchingStateTypes.success;
    },
    priceFetching: (state) => {
      state.fetchingState = FetchingStateTypes.loading;
    },
    priceFetchError: (state, { payload }) => {
      state.errorText = payload.fetchError;
      state.fetchingState = FetchingStateTypes.failed;
    },
  },
});

export const {
  setPriceData,
  priceFetching,
  priceFetchError,
} = priceSlice.actions;
export const priceReducer = priceSlice.reducer;
