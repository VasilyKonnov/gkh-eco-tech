import { Row, Col, Table, Form } from 'antd';
import { SelectDateRange } from '../SelectDateRange';
import { SelectMeter } from '../SelectMeter';
import { SelectAddress } from '../SelectAddress';
import { EmptyBox } from '../EmptyBox';
import { TTabMeteringHistoryViewProps } from './TabMeteringHistoryTypes';

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

const responsiveFilterCol = { xs: 24, sm: 24, md: 8, lg: 8, xl: 8 };

export const TabMeteringHistoryView: React.FC<TTabMeteringHistoryViewProps> = ({
  handlerChangeValue,
  addresses,
  isLoading,
  tableData,
}) => (
  <EmptyBox text="Нет данных для отображения">
    <Form layout="vertical" size="large">
      <Row justify="space-between" gutter={16}>
        <Col {...responsiveFilterCol}>
          <Form.Item label="Дата" name="date" className="form-item">
            <SelectDateRange
              onChangeRange={handlerChangeValue.bind(null, 'date')}
            />
          </Form.Item>
        </Col>
        <Col {...responsiveFilterCol}>
          <Form.Item label="Счетчик" name="meter" className="form-item">
            <SelectMeter
              onChangeMeter={handlerChangeValue.bind(null, 'meter')}
            />
          </Form.Item>
        </Col>
        <Col {...responsiveFilterCol}>
          <Form.Item label="Адрес" name="address" className="form-item">
            <SelectAddress
              onChangeAddress={handlerChangeValue.bind(null, 'address')}
              data={addresses}
            />
          </Form.Item>
        </Col>
      </Row>
      <Table
        className="table-data-history"
        dataSource={tableData}
        columns={columns}
        pagination={false}
        loading={isLoading}
        scroll={{ x: 600 }}
      />
    </Form>
  </EmptyBox>
);
