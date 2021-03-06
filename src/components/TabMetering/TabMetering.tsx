import { useCallback, useEffect, useState } from 'react';
import { Form, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import TabMeteringView from './TabMeteringView';
import { meterAction, meterSelector, TMeterItem } from '../../store/meter';
import { FetchingStateTypes } from '../../store';
import { valueAction } from '../../store/value';
import { setVisibleModal } from '../../store/meter';
import { FormNewMeter } from '../FormNewMeter';
import { MeteringList } from '../MeteringList';
import { TSendValueProps } from '../../utils/api';
import './TabMetering.css';

export const TabMetering = () => {
  const dispatch = useDispatch();
  const { fetchingState, data: meters, types: meterTypes } = useSelector(
    meterSelector
  );
  const [form] = Form.useForm();
  const [showAllMeters, setShowAllMeters] = useState(false);
  const [meterList, setMeterList] = useState<TMeterItem[]>([]);
  const [lockFormAddress, setLockFormAddress] = useState(false);
  const [activeMeter, setActiveMeter] = useState<number | string>(
    'Выберите счетчик'
  );
  const [count, setCount] = useState(0);
  const [prevValue, setPrevValue] = useState<string>('');
  const onSelectMeter = useCallback(
    (id: number | string) => {
      if (!id) {
        form.resetFields();
        return;
      }
      setActiveMeter(id);
      const [meter] = meters.filter((meter) => meter.id === id);
      setPrevValue(meter.previous_value);

      if (meter.address) {
        form.setFieldsValue({
          street: meter.address.street,
          house: meter.address.house,
          building: meter.address.building,
          apartment: meter.address.apartment,
        });
        setLockFormAddress(true);
      } else {
        setLockFormAddress(false);
        form.resetFields();
      }
    },
    [form, meters]
  );

  useEffect(() => {
    if (fetchingState === FetchingStateTypes.none && meterTypes.length) {
      dispatch(meterAction.list());
    }
  }, [dispatch, fetchingState, meterTypes.length]);

  useEffect(() => {
    if (activeMeter !== 'Выберите счетчик') {
      form.setFieldsValue({ meter: activeMeter });
    }
  }, [activeMeter, form]);

  useEffect(() => {
    if (showAllMeters) {
      setMeterList(meters);
    } else {
      const fourthMeter = meters.filter((_, ind) => ind <= 3);
      setMeterList(fourthMeter);
    }
  }, [meters, showAllMeters]);

  useEffect(() => {
    setCount(meters.length);
  }, [meters]);

  function handlerRefreshForm() {
    setActiveMeter('Выберите счетчик');
    form.resetFields();
    setPrevValue('');
  }

  function onAddMeter() {
    dispatch(setVisibleModal({ visible: true }));
  }

  function onShowAllMeters() {
    setShowAllMeters(!showAllMeters);
  }

  function handlerSendValue(values: TSendValueProps) {
    if (+prevValue > +values.value) {
      message.warning('Текущие показание не может быть меньше предыдущего!');
      return;
    }
    if (!values.street.trim().length || !values.house.trim().length) {
      message.warning('Поле улица и дом не могут быть пустыми!');
      return;
    }
    dispatch(valueAction.send(values, handlerRefreshForm));
  }

  return (
    <>
      <TabMeteringView
        onSubmit={handlerSendValue}
        onAddMeter={onAddMeter}
        onShowAllMeters={onShowAllMeters}
        activeMeter={activeMeter}
        form={form}
        meterListComponent={
          <MeteringList data={meterList} onSelectMeter={onSelectMeter} />
        }
        onChangeMeter={onSelectMeter}
        onClearMeter={handlerRefreshForm}
        countMeters={count}
        prevValue={prevValue}
        lockFormAddress={lockFormAddress}
      />
      <FormNewMeter />
    </>
  );
};
