import { message } from 'antd';
import { TMeterAddressItem, meterClearStore } from './../meter';
import { valueClearStore } from './../value';
import { userApi } from '../../utils/api';
import {
  setAuthData,
  userFetching,
  userFetchingError,
  userClearStore,
  setStateDeliveryPass,
  // changingProfileFetching,
  changingProfileError,
  setProfileData,
} from './userSlice';
import jwt_decode from 'jwt-decode';
import axios from '../../services/axios';
import { formatPhoneNumber, openNotification } from '../../helpers';
import {
  TJwt,
  TUserAction,
  TTokenParams,
  TVerifyParams,
  TProfile,
} from './userTypes';

export const userAction: TUserAction = {
  sendMobile: (post: object) => (dispatch) => {
    dispatch(userFetching());
    userApi
      .mobile(post)
      .then(({ status }) => {
        if (status !== 200) throw new Error('Failed to connection');
        dispatch(setStateDeliveryPass({ deliveryState: true }));
      })
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
          })
        );
        dispatch(userAction.profile(sub.user_id) as any);
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
          })
        );
        let address = {
          id: 0,
          street: '',
          house: '',
          building: '',
          apartment: '',
        };
        if (data.addresses.length) {
          const [addressItem] = data.addresses.filter(
            (item: TMeterAddressItem) => item.is_main
          );
          address = addressItem;
        } else if (data.address) {
          address = data.address;
        }
        dispatch(
          setProfileData({
            profile: {
              name: data.name,
              surname: data.surname,
              patronymic: data.patronymic,
              email: data.email,
              attachment: data.attachment,
              personal_account: data.personal_account,
              address,
            },
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
  changeProfile: (profileId: number, profile: TProfile, onFinish) => (
    dispatch
  ) => {
    // dispatch(changingProfileFetching());
    const key = 'changing';
    message.loading({ content: 'Изменение данных...', key });
    userApi
      .changeProfile(profileId, profile)
      .then(({ status, data }) => {
        if (status !== 200) throw new Error('Failed change profile');

        let address = {};
        if (data.address) {
          address = data.address;
        } else if (Array.isArray(data.addresses)) {
          [address] = data.address.filter(
            (item: TMeterAddressItem) => item.is_main
          );
        }
        dispatch(
          setProfileData({
            profile: {
              name: data.name,
              surname: data.surname,
              patronymic: data.patronymic,
              email: data.email,
              attachment: data.attachment,
              personal_account: data.personal_account,
              address,
            },
          })
        );
        onFinish();
        message.success({
          content: 'Данные пользователя обновлены!',
          key,
          duration: 2,
        });
      })
      .catch(() => {
        dispatch(changingProfileError());
        openNotification({
          type: 'error',
          title: 'Ошибка!',
          text: 'Не удалось сохранить изменения',
        });
      });
  },
  removeProfile: (userId) => (dispatch) => {
    userApi
      .removeProfile(userId)
      .then(({ status }) => {
        if (status !== 204) throw new Error('Failed remove profile');
        dispatch(userAction.clearAllStore() as any);
        openNotification({
          type: 'success',
          title: 'Успешно!',
          text: 'Данные профиля удалены',
        });
      })
      .catch(() => {
        openNotification({
          type: 'error',
          title: 'Ошибка!',
          text: 'Не удалось удалить профиль пользователя',
        });
      });
  },
  logout: () => (dispatch) => {
    openNotification({
      type: 'success',
      title: 'Выполнен выход',
    });
    dispatch(userAction.clearAllStore() as any);
  },
  clearAllStore: () => (dispatch) => {
    window.localStorage.removeItem('Token');
    dispatch(userClearStore());
    dispatch(meterClearStore());
    dispatch(valueClearStore());
  },
};
