import { createSlice } from '@reduxjs/toolkit';
import { FetchingStateTypes } from '../types';
import { TValueState } from './valueTypes';

const initialState: TValueState = {
  fetchingState: FetchingStateTypes.none,
  data: [],
  errorText: '',
};

const valueSlice = createSlice({
  name: 'VALUE',
  initialState,
  reducers: {
    setValueData: (state, { payload }) => {
      state.data = payload.data;
      state.fetchingState = FetchingStateTypes.success;
    },
    valueFetching: (state) => {
      state.fetchingState = FetchingStateTypes.loading;
    },
    valueFetchingError: (state, { payload }) => {
      state.fetchingState = FetchingStateTypes.failed;
      state.errorText = payload.errorText;
    },
    setRefresh: (state) => {
      state.fetchingState = FetchingStateTypes.none;
    },
    valueClearStore: () => initialState,
  },
});

export const {
  setValueData,
  valueFetching,
  valueFetchingError,
  setRefresh,
  valueClearStore,
} = valueSlice.actions;
export const valueReducer = valueSlice.reducer;
