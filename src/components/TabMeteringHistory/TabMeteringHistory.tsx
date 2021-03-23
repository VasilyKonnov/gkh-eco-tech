import { Row, Col, Table, Form } from 'antd';
import { SelectDateRange } from '../SelectDateRange';
import { SelectMeter } from '../SelectMeter';
import { SelectAddress } from '../SelectAddress';
import { useDispatch, useSelector } from 'react-redux';
import { meterSelector, TMeterItem } from '../../store/meter';
import { valueSelector } from '../../store/value/valueSelector';
import { useCallback, useEffect, useState } from 'react';
import { FetchingStateTypes } from '../../store';
import { valueAction, TValueItem } from '../../store/value';
import { EmptyBox } from '../EmptyBox';
import { TMeterAddressItem } from '../../store/meter';
import { parseAddressValue } from '../../helpers';

enum EDateValue {
  all = 'all',
  half_a_year = 'half-a-year',
  year = 'year',
}

const columns = [
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Cчетчик',
    dataIndex: 'meter',
    key: 'meter',
  },
  {
    title: 'Значение',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    key: 'address',
  },
];

type TValuesForm = {
  date: string | null;
  meter: string | null;
  address: string | null;
};

type TTimes = {
  [key: string]: number;
};

const checkDate = (type: string, date: string) => {
  const times: TTimes = {
    'half-a-year': 60 * 60 * 24 * 30 * 6 * 1000,
    year: 60 * 60 * 24 * 30 * 12 * 1000,
  };
  const dt = Date.now() - times[type];
  return Date.parse(date) > dt;
};

export const TabMeteringHistory = () => {
  const { data: meters, types: meterTypes } = useSelector(meterSelector);
  const addressList = meters.reduce(
    (acc: TMeterAddressItem[], cur: TMeterItem) => {
      if (
        cur.address?.id &&
        !acc.some((addressItem) => addressItem.id === cur.address.id)
      ) {
        acc.push(cur.address);
      }
      return acc;
    },
    []
  );
  const { fetchingState, data: values } = useSelector(valueSelector);
  const [valuesForm, setValuesForm] = useState<TValuesForm>({
    date: EDateValue.all,
    meter: null,
    address: null,
  });
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState<any>([]);
  const getMeterTitle = useCallback(
    (meterId: number) => {
      const [meter] = meters.filter((meter) => meter.id === meterId);
      return meter.title;
    },
    [meters]
  );
  const cbHasAddress = (val: TValueItem) => val.address;

  const refreshData = useCallback(() => {
    const { date, meter, address } = valuesForm;
    const filterByMeter = (val: TValueItem) =>
      meter ? +meter === val.meter : true;
    const filterByAddress = (val: TValueItem) =>
      address ? +address === val.address?.id : true;
    const filterByDate = (val: TValueItem) =>
      date !== EDateValue.all ? checkDate(date as string, val.date) : true;

    const data = values
      .filter(cbHasAddress)
      .filter(filterByAddress)
      .filter(filterByMeter)
      .filter(filterByDate)
      .map((val) => {
        return {
          key: val.id,
          date: new Date(val.date).toLocaleDateString('en-GB'),
          meter: getMeterTitle(val.meter),
          value: val.value,
          address: parseAddressValue(val.address),
        };
      });
    setTableData(data);
  }, [getMeterTitle, values, valuesForm]);

  useEffect(() => {
    if (fetchingState === FetchingStateTypes.none) {
      dispatch(valueAction.list());
    }
  }, [dispatch, fetchingState]);

  useEffect(() => {
    const date = values.filter(cbHasAddress).map((val) => {
      return {
        key: val.id,
        date: new Date(val.date).toLocaleDateString('en-GB'),
        meter: getMeterTitle(val.meter),
        value: val.value,
        address: parseAddressValue(val.address),
      };
    });

    setTableData(date);
  }, [getMeterTitle, meterTypes, values]);

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
    <EmptyBox text="Нет данных для отображения">
      <Form layout="vertical" size="large">
        <Row justify="space-between" gutter={[16, 16]}>
          <Col span={8}>
            <Form.Item label="Дата" name="date" className="form-item">
              <SelectDateRange
                onChangeRange={handlerChangeValue.bind(null, 'date')}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Счетчик" name="meter" className="form-item">
              <SelectMeter
                onChangeMeter={handlerChangeValue.bind(null, 'meter')}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Адрес" name="address" className="form-item">
              <SelectAddress
                onChangeAddress={handlerChangeValue.bind(null, 'address')}
                data={addressList}
              />
            </Form.Item>
          </Col>
        </Row>
        <Table
          className="table-data-history"
          dataSource={tableData}
          columns={columns}
          pagination={{ position: [] }}
          loading={fetchingState === FetchingStateTypes.loading}
        />
      </Form>
    </EmptyBox>
  );
};
