import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: 0,
  phone: "",
  role: '',
  isAuth: false,
  fetchingState: 'none',
  errorText: ''
}

const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    setAuthData: (state, { payload }) => {
      state.userId = payload.userId;
      state.phone = payload.phone;
      state.role = payload.role;
      state.isAuth = payload.isAuth;
      state.fetchingState = 'success';
    },
    userFetching: (state) => {
      state.fetchingState = 'loading';
    },
    userFetchingError: (state, { payload }) => {
      state.fetchingState = 'failed';
      state.errorText = payload.errorText;
    }
  }
});

export const { setAuthData, userFetching, userFetchingError } = userSlice.actions;
export const userReducer = userSlice.reducer;