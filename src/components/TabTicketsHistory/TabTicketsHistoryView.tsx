import { Row, Col, Table, Form, Select } from 'antd'
import { SelectDateRange } from '../SelectDateRange'
import { SelectTicketsStatus } from '../SelectTicketsStatus'
import { SelectTicketsAddress } from '../SelectTicketsAddress'
import { FetchingStateTypes } from '../../store'
import { EmptyBox } from '../EmptyBox'
import { TTabTicketsHistoryViewProps } from './TabTicketsHistoryTypes'

const columns = [
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Тема',
    dataIndex: 'topic',
    key: 'topic',
  },
  {
    title: 'ФИО',
    dataIndex: 'fio',
    key: 'fio',
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    key: 'address',
  },
]

export const TabTicketsHistoryView: React.FC<TTabTicketsHistoryViewProps> = ({
  filterStatus,
  filterAddress,
  tableTicketsData,
  isLoading,
  addressList,
  statusList,
  filterDate,
}) => {
  return (
    <EmptyBox text="Нет данных для отображения">
      <Form layout="vertical" size="large" className="form-data-history">
        <Row justify="space-between" gutter={[16, 16]}>
          <Col span={8}>
            <Form.Item label="Дата" name="date" className="form-item">
              <SelectDateRange onChangeRange={filterDate} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Статус заявки" name="meter" className="form-item">
              <SelectTicketsStatus
                statusList={statusList}
                onChangeStatus={filterStatus}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Адрес" name="address" className="form-item">
              <SelectTicketsAddress
                dataAddress={addressList ? addressList : []}
                onChangeAddress={filterAddress}
              />
            </Form.Item>
          </Col>
        </Row>
        <Table
          className="table-data-history"
          dataSource={tableTicketsData}
          columns={columns}
          pagination={{ position: [] }}
          loading={isLoading}
        />
      </Form>
    </EmptyBox>
  )
}
