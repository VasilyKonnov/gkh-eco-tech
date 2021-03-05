import { userApi } from '../../utils/api';
import { setAuthData, userFetching, userFetchingError } from '../reducers';

export const userAction = {
  auth: (post) => dispatch => {
    dispatch(userFetching());
    userApi.auth(post)
      .then((data) => {
        dispatch(setAuthData({
          userId: data.userId,
          phone: data.phone,
          role: data.role,
          isAuth: data.isAuth
        }))
      }).catch((err) => {
        dispatch(userFetchingError({
          errorText: err
        }))
      })
  }
}