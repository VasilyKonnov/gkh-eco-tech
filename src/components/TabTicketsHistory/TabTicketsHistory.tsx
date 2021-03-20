import { Row, Col, Table, Form, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { ticketsAction, ticketsSelector } from '../../store/tickets'
import { SelectDateRange } from '../SelectDateRange'
import { SelectTickets } from '../SelectTickets'
import { SelectAddress } from '../SelectAddress'
import { useEffect, useState } from 'react'
import { TTabTicketsHistoryTypes } from './TabTicketsHistoryTypes'
import { FetchingStateTypes } from '../../store'

export const TabTicketsHistory = () => {
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
      dataIndex: 'adress',
      key: 'adress',
    },
  ]
  const [tableTicketsData, setTableTicketsData] = useState<
    TTabTicketsHistoryTypes[]
  >()
  const dispatch = useDispatch()
  const { data, fetchingState, errorText } = useSelector(ticketsSelector)

  useEffect(() => {
    if (data.length < 1) {
      dispatch(ticketsAction.list())
    }
    const getTicketsData = data.map((tableData, id) => {
      return {
        key: id,
        date: tableData.created_at.slice(0, 10),
        status: tableData.status,
        topic: tableData.subject,
        fio: `${tableData.surname} ${tableData.name} ${tableData.patronymic}`,
        adress: `${tableData.address.street} ${tableData.address.house} ${tableData.address.building} ${tableData.address.apartment} `,
      }
    })
    setTableTicketsData(getTicketsData)
  }, [])

  if (fetchingState === 'failed') {
    return <h1 style={{ marginTop: '50px' }}>{errorText}</h1>
  }

  return (
    <Form layout="vertical" size="large">
      <Row justify="space-between" gutter={[16, 16]}>
        <Col span={8}>
          <Form.Item label="Дата" name="date" className="form-item">
            <SelectDateRange onChangeRange={() => {}} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Счетчик" name="meter" className="form-item">
            <SelectTickets />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Адрес" name="address" className="form-item">
            <Select />
          </Form.Item>
        </Col>
      </Row>
      <Table
        className="table-data-history"
        dataSource={tableTicketsData}
        columns={columns}
        pagination={{ position: [] }}
        loading={fetchingState === FetchingStateTypes.loading}
      />
    </Form>
  )
}
