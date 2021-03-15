import { createSlice } from '@reduxjs/toolkit';
import { FetchingStateTypes } from '../types';
import { TUserState } from './userTypes';

const initialState: TUserState = {
  userId: 0,
  phone: '',
  role: 'none',
  isAuth: false,
  fetchingState: FetchingStateTypes.none,
  passDeliveryState: false,
  errorText: '',
};

const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    setStateDeliveryPass: (state, { payload }) => {
      state.passDeliveryState = payload.deliveryState;
      state.fetchingState = FetchingStateTypes.success;
    },
    setAuthData: (state, { payload }) => {
      state.userId = payload.userId;
      state.phone = payload.phone;
      state.role = payload.role;
      state.isAuth = true;
      state.fetchingState = FetchingStateTypes.success;
    },
    userFetching: (state) => {
      state.fetchingState = FetchingStateTypes.loading;
    },
    userFetchingError: (state, { payload }) => {
      state.fetchingState = FetchingStateTypes.failed;
      state.errorText = payload.errorText;
    },
    userLogout: (state) => {
      state.userId = 0;
      state.phone = '';
      state.role = 'none';
      state.isAuth = false;
      state.fetchingState = FetchingStateTypes.none;
    },
  },
});

export const {
  setAuthData,
  userFetching,
  userFetchingError,
  userLogout,
  setStateDeliveryPass,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
