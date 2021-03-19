import { meterAction } from './../meter/meterAction';
import { valueApi } from '../../utils/api';
import { TValueAction } from './valueTypes';
import { openNotification } from '../../helpers';
import { setValueData, valueFetching } from './valueSlice';
import { message } from 'antd';

export const valueAction: TValueAction = {
  list: () => (dispatch) => {
    dispatch(valueFetching());
    valueApi
      .list()
      .then(({ data }) => {
        dispatch(setValueData({ data }));
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
