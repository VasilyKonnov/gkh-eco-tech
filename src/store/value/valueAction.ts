import { store } from './../store';
import { meterAction } from './../meter/meterAction';
import { valueApi } from '../../utils/api';
import { TValueAction } from './valueTypes';
import { openNotification } from '../../helpers';
import { setValueData, valueFetching, setRefresh as refreshValues } from './valueSlice';
import { message } from 'antd';

export const valueAction: TValueAction = {
  list: () => (dispatch) => {
    dispatch(valueFetching());
    valueApi
      .list()
      .then(({ data }) => {
        const { meter: meters } = store.getState();
        // fill address data
        const getAddressId = (meterId: number) => {
          const [meter] = meters.data.filter(
            (item: any) => item.id === meterId
          );
          return meter.address;
        };
        const values = data.map((val: any) => {
          return { ...val, ...{ address: getAddressId(val.meter) } };
        });

        dispatch(setValueData({ data: values }));
      })
      .catch(() => {
        openNotification({
          type: 'error',
          title: 'Ошибка',
          text: 'Возникла ошибка при загрузке данных!',
        });
      });
  },
  send: (values, onResetFields) => (dispatch) => {
    valueApi
      .send(values)
      .then(({ status }) => {
        if (status !== 201) throw new Error('Failed send value');
        message.success('Показания загружены!');
        dispatch(meterAction.fillAddress(values) as any);
        dispatch(refreshValues());
        onResetFields();
      })
      .catch(() => {
        openNotification({
          type: 'error',
          title: 'Ошибка!',
          text: 'Не удалось отправить данные. Просьба повторить позднее',
        });
      });
  },
};
