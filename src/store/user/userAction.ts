import { userApi } from '../../utils/api';
import {
  setAuthData,
  userFetching,
  userFetchingError,
  userLogout,
  setStateDeliveryPass,
} from './userSlice';
import jwt_decode from 'jwt-decode';
import axios from '../../services/axios';
import { formatPhoneNumber, openNotification } from '../../helpers';
import { TJwt, TUserAction, TTokenParams, TVerifyParams } from './userTypes';

export const userAction: TUserAction = {
  sendMobile: (post: object) => (dispatch) => {
    dispatch(userFetching());
    userApi
      .mobile(post)
      .then(() => dispatch(setStateDeliveryPass({ deliveryState: true })))
      .catch(() => {
        dispatch(setStateDeliveryPass({ deliveryState: false }));
        openNotification({
          type: 'error',
          title: 'Ошибка!',
          text: 'Не удалось отправить SMS на указанный номер',
        });
      });
  },
  token: (post: TTokenParams) => (dispatch) => {
    dispatch(userFetching());
    userApi
      .token(post)
      .then(({ data }) => {
        const sub = jwt_decode<TJwt>(data.access);
        window.localStorage.setItem('Token', data.access);
        axios.defaults.headers.common['Authorization'] =
          'Bearer ' + data.access;

        dispatch(
          setAuthData({
            userId: sub.user_id,
            phone: post.mobile,
            role: 'user',
          })
        );
        openNotification({
          type: 'success',
          title: 'Успешно!',
          text: `Вы зашли под учетной записью \r\n ${formatPhoneNumber(
            post.mobile
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
  verify: (post: TVerifyParams) => (dispatch) => {
    if (!post.token) return;
    dispatch(userFetching());
    userApi
      .verify(post)
      .then(() => {
        const sub = jwt_decode<TJwt>(post.token);
        dispatch(userAction.profile(sub.user_id) as any);
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
  profile: (userId) => (dispatch) => {
    userApi
      .profile(userId)
      .then(({ data }) => {
        dispatch(
          setAuthData({
            userId: userId,
            phone: data.mobile,
            role: 'user',
          })
        );
      })
      .catch(() => {
        dispatch(userFetchingError({ errorText: 'Ошибка проверки токена' }));
        window.localStorage.removeItem('Token');
        openNotification({
          title: 'Время сессии истекло!',
          text: 'Необходимо авторизоваться повторно',
        });
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
