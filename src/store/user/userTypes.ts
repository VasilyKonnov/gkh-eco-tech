import { TMeterAddressItem } from './../meter/meterTypes';
import { Dispatch } from 'redux';
import { FetchingStateTypes } from '../types';

export type TUserState = {
  userId: number;
  phone: string;
  profile: {
    name: string;
    surname: string;
    patronymic: string;
    email: string;
    attachment: string;
    personal_account: null;
    address: TMeterAddressItem;
  };
  isAuth: boolean;
  fetchingState: FetchingStateTypes;
  changingProfileState: FetchingStateTypes;
  passDeliveryState: boolean;
  errorText: string;
};

export type TProfile = {
  name: string;
  surname: string;
  patronymic: string;
  email: string;
  attachment?: string;
  personal_account: number;
  address: {
    street: string;
    house: string;
    building: string;
    apartment: string;
    is_main?: boolean;
  };
};

export type TJwt = {
  exp: number;
  jti: string;
  token_type: string;
  user_id: number;
};

export type TUserAction = {
  sendMobile: (post: object) => (dispatch: Dispatch) => void;
  token: (post: TTokenParams) => (dispatch: Dispatch) => void;
  verify: (post: TVerifyParams) => (dispatch: Dispatch) => void;
  profile: (userId: number) => (dispatch: Dispatch) => void;
  logout: () => (dispatch: Dispatch) => void;
  changeProfile: (
    profileId: number,
    profile: any,
    onFinish: () => void
  ) => (dispatch: Dispatch) => void;
  removeProfile: (profileId: number) => (dispatch: Dispatch) => void;
  clearAllStore: () => (dispatch: Dispatch) => void;
};

export type TTokenParams = {
  mobile: string;
  token: string;
  agree: boolean;
};

export type TVerifyParams = {
  token: string;
};
