import { userApi } from '../../utils/api';
import {
  setAuthData,
  userFetching,
  userFetchingError,
  userLogout,
  IUserState,
} from './userSlice';
import jwt_decode from 'jwt-decode';
import { Dispatch } from 'redux';
import axios from '../../services/axios';
import { formatPhoneNumber, openNotification } from '../../helpers';

interface IJwt {
  sub: IUserState;
}

interface IUserAction {
  auth: (post: object) => (dispatch: Dispatch) => void;
  verify: () => (dispatch: Dispatch) => void;
  logout: () => (dispatch: Dispatch) => void;
}

export const userAction: IUserAction = {
  auth: (post: object) => (dispatch) => {
    dispatch(userFetching());
    userApi
      .auth(post)
      .then(({ data }) => {
        const { sub } = jwt_decode<IJwt>(data.token);
        window.localStorage.setItem('Token', data.token);
        axios.defaults.headers.common['Token'] = data.token;
        dispatch(setAuthData(sub));
        openNotification({
          type: 'success',
          title: 'Успешно!',
          text: `Вы зашли под учетной записью \r\n ${formatPhoneNumber(
            sub.phone
          )}`,
        });
      })
      .catch(() => {
        dispatch(userFetchingError({ errorText: 'Ошибка авторизации' }));
        openNotification({
          type: 'error',
          title: 'Ошибка!',
          text: 'Пользователь не авторизован',
        });
      });
  },
  verify: () => (dispatch) => {
    if (!window.localStorage.getItem('Token')) return;
    dispatch(userFetching());
    userApi
      .verify()
      .then(({ data }) => {
        const { sub } = data;
        dispatch(setAuthData(sub));
      })
      .catch((err) => {
        dispatch(
          userFetchingError({
            errorText: err,
          })
        );
        window.localStorage.removeItem('Token');
      });
  },
  logout: () => (dispatch) => {
    window.localStorage.removeItem('Token');
    dispatch(userLogout());
    openNotification({
      type: 'success',
      title: 'Выполнен выход',
    });
  },
};
