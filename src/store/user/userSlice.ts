import { createSlice } from '@reduxjs/toolkit';
import { FetchingStateTypes, UserRoleTypes } from '../types';

export interface IUserState {
  userId: number;
  phone: string;
  role: UserRoleTypes;
  isAuth: boolean;
  fetchingState: FetchingStateTypes;
  errorText: string;
}

const initialState: IUserState = {
  userId: 0,
  phone: '',
  role: 'none',
  isAuth: false,
  fetchingState: FetchingStateTypes.none,
  errorText: '',
};

const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
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
} = userSlice.actions;
export const userReducer = userSlice.reducer;
