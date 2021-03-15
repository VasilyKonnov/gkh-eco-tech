import { Dispatch } from 'redux';
import { FetchingStateTypes, UserRoleTypes } from '../types';

export type TUserState = {
  userId: number;
  phone: string;
  role: UserRoleTypes;
  isAuth: boolean;
  fetchingState: FetchingStateTypes;
  passDeliveryState: boolean;
  errorText: string;
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
};

export type TTokenParams = {
  mobile: string;
  token: string;
  agree: boolean;
};

export type TVerifyParams = {
  token: string;
};
