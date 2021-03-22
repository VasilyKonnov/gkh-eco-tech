import { Row, Col, Table, Form, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { ticketsAction, ticketsSelector } from '../../store/tickets'
import { SelectDateRange } from '../SelectDateRange'
import { SelectTicketsStatus } from '../SelectTicketsStatus'
import { SelectAddress } from '../SelectAddress'
import { useEffect, useState } from 'react'
import { TTabTicketsHistoryTypes } from './TabTicketsHistoryTypes'
import { FetchingStateTypes } from '../../store'
import { EmptyBox } from '../EmptyBox'

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
  const [filterTicketsData, setFilterTicketsData] = useState<
    TTabTicketsHistoryTypes[]
  >()
  const dispatch = useDispatch()
  const { data, fetchingState } = useSelector(ticketsSelector)
  const getTableTicketsData = () => {
    // @ts-ignore
    const getTicketsData = data.map((tableData, id) => {
      return {
        key: id + 1,
        date: new Date(tableData.created_at)
          .toLocaleDateString('en-GB')
          .replace(/\//g, '.'),
        status: tableData.status,
        topic: tableData.subject,
        fio: `${tableData.surname} ${tableData.name} ${tableData.patronymic}`,
        adress: `${tableData.address.street} ${tableData.address.house} ${tableData.address.building} ${tableData.address.apartment} `,
      }
    })
    setTableTicketsData(getTicketsData)
    setFilterTicketsData(getTicketsData)
  }

  function refreshData(ticketId: number | string) {
    if (ticketId) {
      // @ts-ignore
      const dataTable = filterTicketsData.filter(
        (value) => value.status === ticketId,
      )
      setTableTicketsData(dataTable)
    } else if (data) {
      getTableTicketsData()
    }
  }

  useEffect(() => {
    if (fetchingState === FetchingStateTypes.none) {
      dispatch(ticketsAction.list())
    }
  }, [dispatch, fetchingState])

  useEffect(() => {
    getTableTicketsData()
  }, [data, fetchingState])

  return (
    <EmptyBox text="Нет данных для отображения">
      <Form layout="vertical" size="large" className="form-data-history">
        <Row justify="space-between" gutter={[16, 16]}>
          <Col span={8}>
            <Form.Item label="Дата" name="date" className="form-item">
              <SelectDateRange onChangeRange={() => {}} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Статус заявки" name="meter" className="form-item">
              <SelectTicketsStatus onChangeStatus={refreshData} />
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
    </EmptyBox>
  )
}
