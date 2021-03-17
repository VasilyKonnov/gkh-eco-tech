import { useEffect, useState } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { FormMeteringTabView } from './FormMeteringTabView';
import { meterAction, meterSelector } from '../../store/meter';
import { userSelector } from '../../store/user';
import { valueAction } from '../../store/value';
import { FetchingStateTypes } from '../../store';
import { FormNewMeter } from '../FormNewMeter';
import { TCreateMeterProps, valueApi } from '../../utils/api';
import { openMessage } from '../../helpers';

export const FormMeteringTab = () => {
  const dispatch = useDispatch();
  const { fetchingState, data: meterList } = useSelector(meterSelector);
  const { isAuth } = useSelector(userSelector);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { types } = useSelector(meterSelector);
  const [form] = Form.useForm();

  function onSubmit(values: any) {
    valueApi
      .send(values)
      .then(({ data }) => {
        // if (response.status === 200) {
        openMessage({
          text: 'Загружены!',
          type: 'success',
        });
        // }
        console.log(data);

        // form.resetFields();
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }

  // load types
  useEffect(() => {
    isAuth && dispatch(meterAction.getTypes());
  }, [dispatch, isAuth]);

  useEffect(() => {
    if (fetchingState === FetchingStateTypes.none) {
      dispatch(meterAction.list());
    }
  }, [dispatch, fetchingState]);

  function onAddMeter() {
    setIsModalVisible(true);
  }

  function onCreateMeter(values: TCreateMeterProps) {
    dispatch(meterAction.create(values));
    setIsModalVisible(false);
  }

  function onCloseModalCreateMeter() {
    setIsModalVisible(false);
  }

  return (
    <>
      <FormMeteringTabView
        onSubmit={onSubmit}
        onAddMeter={onAddMeter}
        meterList={meterList}
        form={form}
      />
      <FormNewMeter
        visible={isModalVisible}
        onCreateMeter={onCreateMeter}
        onCloseModalCreateMeter={onCloseModalCreateMeter}
        meterTypes={types}
      />
    </>
  );
};
