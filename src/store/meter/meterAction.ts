import { meterApi } from './../../utils/api/meter';
import { message } from 'antd';
import { openNotification } from './../../helpers/openNotification';
import {
  setMeterData,
  meterFetching,
  setMeterTypes,
  addNewMeter,
  setRefresh,
  fillNewMeter,
} from './meterSlice';
import { TMeterAction } from './meterTypes';

export const meterAction: TMeterAction = {
  getTypes: () => (dispatch) => {
    meterApi.getTypes().then(({ data }) => {
      dispatch(setMeterTypes({ types: data }));
    });
  },
  list: () => (dispatch) => {
    dispatch(meterFetching());
    meterApi.list().then(({ data }) => {
      dispatch(setMeterData({ data }));
    });
  },
  create: (post, cbCloseForm) => (dispatch) => {
    meterApi
      .create(post)
      .then(({ data, status }) => {
        if (status !== 201) throw new Error('Failed create meter');
        dispatch(addNewMeter({ meter: data }));
        message.success('Счетчик добавлен!');
        cbCloseForm();
      })
      .catch(() => {
        openNotification({
          type: 'error',
          title: 'Ошибка!',
          text: 'Не удалось добавить счетчик',
        });
      });
  },
  fillAddress: (values) => async (dispatch) => {
    const { data: meter } = await meterApi.byId(values.meter);
    if (!meter.address) {
      const { apartment, building, house, street } = values;
      const address = {
        apartment,
        building,
        house,
        street,
      };

      meterApi
        .fillAddress(values.meter, {
          address,
        })
        .then(({ data }) => {
          dispatch(
            fillNewMeter({
              meterId: values.meter,
              address: data.address,
              previous_value: data.previous_value,
            })
          );
        });
    } else dispatch(setRefresh());
  },
};
