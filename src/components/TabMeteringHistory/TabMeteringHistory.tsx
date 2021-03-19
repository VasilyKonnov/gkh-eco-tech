import { Row, Col, Table, Form } from 'antd';
import { SelectDateRange } from '../SelectDateRange';
import { SelectMeter } from '../SelectMeter';
import { SelectAddress } from '../SelectAddress';
import { useSelector } from 'react-redux';
import { meterSelector } from '../../store/meter';

export const TabMeteringHistory = () => {
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
      title: 'Тип',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Адрес',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const dataSource = [
    {
      key: '1',
      date: '21.01.2021',
      meter: 32,
      type: 'Холодная вода',
      address: '10 Downing Street',
    },
    {
      key: '2',
      date: '21.01.2021',
      meter: 32,
      type: 'Холодная вода',
      address: '12 Downing Street',
    },
  ];
  const { data: meters } = useSelector(meterSelector);
  const addressList = meters.map((meter) =>
    Object.values(meter.address).join(' ')
  );

  function refreshData() {}

  return (
    <Form layout="vertical" size="large">
      <Row justify="space-between" gutter={[16, 16]}>
        <Col span={8}>
          <Form.Item label="Дата" name="date" className="form-item">
            <SelectDateRange onChangeRange={refreshData} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Счетчик" name="meter" className="form-item">
            <SelectMeter onChangeMeter={refreshData} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Адрес" name="address" className="form-item">
            <SelectAddress onChangeAddress={refreshData} data={addressList} />
          </Form.Item>
        </Col>
      </Row>
      <Table
        className="table-data-history"
        dataSource={dataSource}
        columns={columns}
        pagination={{ position: [] }}
      />
    </Form>
  );
};
