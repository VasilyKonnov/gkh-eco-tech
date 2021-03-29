import { useDispatch, useSelector } from 'react-redux';
import { meterAction, meterSelector, TMeterItem } from '../../store/meter';
import { valueSelector } from '../../store/value/valueSelector';
import { useCallback, useEffect, useState } from 'react';
import { FetchingStateTypes } from '../../store';
import { valueAction, TValueItem } from '../../store/value';
import { TMeterAddressItem } from '../../store/meter';
import { parseAddressValue } from '../../helpers';
import { TabMeteringHistoryView } from './TabMeteringHistoryView';
import { TValuesForm, TTableRowItem } from './TabMeteringHistoryTypes';
import {
  filterByMeter,
  filterByDate,
  filterByAddress,
  EDateValue,
} from '../../utils/filter';

const sortByDate = (cur: TValueItem, sec: TValueItem) =>
  Date.parse(sec.date) - Date.parse(cur.date);

const fillUniqAddress = (acc: TMeterAddressItem[], cur: TMeterItem) => {
  if (
    cur.address?.id &&
    !acc.some((addressItem) => addressItem.id === cur.address.id)
  )
    acc.push(cur.address);
  return acc;
};

export const TabMeteringHistory = () => {
  const dispatch = useDispatch();
  const { data: meters, fetchingState: metersFetchingState } = useSelector(
    meterSelector
  );
  const addresses = meters.reduce(fillUniqAddress, []);
  const { fetchingState: valuesFetchingState, data: values } = useSelector(
    valueSelector
  );
  const [valuesForm, setValuesForm] = useState<TValuesForm>({
    date: EDateValue.all,
    meter: null,
    address: null,
  });
  const [tableData, setTableData] = useState<TTableRowItem[]>([]);
  const refreshData = useCallback(() => {
    const { date, meter, address } = valuesForm;
    const getMeterName = (meterId: number) => {
      const [meter] = meters.filter((meter) => meter.id === meterId);
      return meter.title;
    };
    const getMeterAddress = (meterId: number) => {
      const [meter] = meters.filter((meter) => meter.id === meterId);
      return meter.address;
    };

    const data = values
      .filter(
        (val) =>
          filterByMeter(meter, val) &&
          filterByAddress(address, val, meters) &&
          filterByDate(date as string, val)
      )
      .sort(sortByDate)
      .map((val) => {
        return {
          key: val.id,
          date: new Date(val.date).toLocaleDateString('ru-RU'),
          meter: getMeterName(val.meter),
          value: val.value,
          address: parseAddressValue(getMeterAddress(val.meter)),
        };
      });
    setTableData(data);
  }, [meters, values, valuesForm]);

  useEffect(() => {
    if (valuesFetchingState === FetchingStateTypes.none) {
      dispatch(valueAction.list());
    }
    if (metersFetchingState === FetchingStateTypes.none) {
      dispatch(meterAction.list());
    }
  }, [dispatch, valuesFetchingState, metersFetchingState]);

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  function handlerChangeValue(name: string, value: number | string) {
    const newState = {
      [name]: value,
    };
    setValuesForm({ ...valuesForm, ...newState });
  }

  return (
    <TabMeteringHistoryView
      handlerChangeValue={handlerChangeValue}
      isLoading={
        valuesFetchingState === FetchingStateTypes.loading ||
        metersFetchingState === FetchingStateTypes.loading
      }
      tableData={tableData}
      addresses={addresses}
    />
  );
};
