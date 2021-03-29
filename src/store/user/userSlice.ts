import { createSlice } from '@reduxjs/toolkit'
import { FetchingStateTypes } from '../types'
import { TUserState } from './userTypes'

const initialState: TUserState = {
  userId: 0,
  phone: '',
  profile: {
    name: '',
    surname: '',
    patronymic: '',
    email: '',
    attachment: '',
    personal_account: null,
    address: {
      id: 0,
      street: '',
      house: '',
      building: '',
      apartment: '',
    },
  },
  isAuth: false,
  fetchingState: FetchingStateTypes.none,
  changingProfileState: FetchingStateTypes.none,
  passDeliveryState: false,
  errorText: '',
}

const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    setStateDeliveryPass: (state, { payload }) => {
      state.passDeliveryState = payload.deliveryState
      state.fetchingState = FetchingStateTypes.success
    },
    setAuthData: (state, { payload }) => {
      state.userId = payload.userId;
      state.phone = payload.phone;
      state.isAuth = true;
      state.fetchingState = FetchingStateTypes.success;
    },
    userFetching: (state) => {
      state.fetchingState = FetchingStateTypes.loading
    },
    userFetchingError: (state, { payload }) => {
      state.fetchingState = FetchingStateTypes.failed
      state.errorText = payload.errorText
    },
    setProfileData: (state, { payload }) => {
      state.profile = { ...payload.profile };
      state.changingProfileState = FetchingStateTypes.success;
    },
    changingProfileFetching: (state) => {
      state.changingProfileState = FetchingStateTypes.loading;
    },
    changingProfileError: (state) => {
      state.changingProfileState = FetchingStateTypes.failed;
    },
    userClearStore: () => initialState,
  },
})

export const {
  setAuthData,
  userFetching,
  userFetchingError,
  userClearStore,
  setProfileData,
  setStateDeliveryPass,
  changingProfileFetching,
  changingProfileError,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
