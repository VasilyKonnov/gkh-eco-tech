import { meterApi } from '../../utils/api';
import { setMeterData, meterFetching, setMeterTypes } from './meterSlice';
import { TMeterAction } from './meterTypes';

export const meterAction: TMeterAction = {
  list: () => (dispatch) => {
    dispatch(meterFetching());
    meterApi.list().then(({ data }) => {
      dispatch(setMeterData({ data: data }));
    });
  },
  create: (post) => (dispatch) => {
    meterApi.create(post).then(({ data }) => {});
  },
  getTypes: () => (dispatch) => {
    meterApi.getTypes().then(({ data }) => {
      dispatch(setMeterTypes({ types: data }));
    });
  },
};
