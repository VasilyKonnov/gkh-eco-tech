import { Row, Col, Table, Form } from 'antd';
import { SelectDateRange } from '../SelectDateRange';
import { SelectTicketsStatus } from '../SelectTicketsStatus';
import { SelectAddress } from '../SelectAddress';
import { EmptyBox } from '../EmptyBox';
import { TTabTicketsHistoryViewProps } from './TabTicketsHistoryTypes';
import { columns } from './data';

const responsiveFilterCol = { xs: 24, sm: 24, md: 8, lg: 8, xl: 8 };

export const TabTicketsHistoryView: React.FC<TTabTicketsHistoryViewProps> = ({
  tableTicketsData,
  onChangeFilter,
  isLoading,
  addressList,
  statusList,
}) => {
  return (
    <EmptyBox text="Нет данных для отображения">
      <Form layout="vertical" size="large" className="form-data-history">
        <Row justify="space-between" gutter={16}>
          <Col {...responsiveFilterCol}>
            <Form.Item label="Дата" name="data" className="form-item">
              <SelectDateRange
                onChangeRange={onChangeFilter.bind(null, 'date')}
              />
            </Form.Item>
          </Col>
          <Col {...responsiveFilterCol}>
            <Form.Item
              label="Статус заявки"
              name="status"
              className="form-item"
            >
              <SelectTicketsStatus
                data={statusList}
                onChangeStatus={onChangeFilter.bind(null, 'status')}
              />
            </Form.Item>
          </Col>
          <Col {...responsiveFilterCol}>
            <Form.Item label="Адрес" name="address" className="form-item">
              <SelectAddress
                data={addressList}
                onChangeAddress={onChangeFilter.bind(null, 'address')}
              />
            </Form.Item>
          </Col>
        </Row>
        <Table
          className="table-data-history"
          dataSource={tableTicketsData}
          columns={columns}
          pagination={false}
          loading={isLoading}
          scroll={{ x: 600 }}
        />
      </Form>
    </EmptyBox>
  );
};
