import { Row, Col, Table, Form, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { ticketsAction, ticketsSelector } from '../../store/tickets'
import { SelectDateRange } from '../SelectDateRange'
import { SelectTicketsStatus } from '../SelectTicketsStatus'
import { SelectTicketsAddress } from '../SelectTicketsAddress'
import { useEffect, useState } from 'react'
import { TTabTicketsHistoryTypes } from './TabTicketsHistoryTypes'
import { FetchingStateTypes } from '../../store'
import { EmptyBox } from '../EmptyBox'
import { uniqueVal } from '../../utils/common'

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
      dataIndex: 'address',
      key: 'address',
    },
  ]
  const { data, fetchingState } = useSelector(ticketsSelector)
  const dispatch = useDispatch()

  const [tableTicketsData, setTableTicketsData] = useState<
    TTabTicketsHistoryTypes[]
  >()
  const [filterTicketsData, setFilterTicketsData] = useState<
    TTabTicketsHistoryTypes[]
  >()
  const [addressList, setAddressList] = useState<string[]>()

  const getAddressList = () => {
    if (filterTicketsData) {
      let addressList = filterTicketsData.map((tickets) => tickets.address)
      addressList = addressList.filter(uniqueVal)
      setAddressList(addressList)
    }
  }

  const getTableTicketsData = () => {
    const getTicketsData = data.map((tableData, id) => {
      return {
        key: id + 1,
        date: new Date(tableData.created_at)
          .toLocaleDateString('en-GB')
          .replace(/\//g, '.'),
        status: tableData.status,
        topic: tableData.subject,
        fio: `${tableData.surname} ${tableData.name} ${tableData.patronymic}`,
        address: `${tableData.address.street} Дом ${tableData.address.house} ${
          tableData.address.building || ''
        } ${tableData.address.apartment || ''} `,
      }
    })
    setTableTicketsData(getTicketsData)
    setFilterTicketsData(getTicketsData)
    getAddressList()
  }

  function searchDataStatus(ticketId: number | string) {
    if (ticketId && filterTicketsData) {
      const dataTable = filterTicketsData.filter(
        (value) => value.status === ticketId,
      )
      setTableTicketsData(dataTable)
    } else if (data) {
      getTableTicketsData()
    }
  }

  function searchDataAddress(ticketId: number | string) {
    if (ticketId && filterTicketsData) {
      const dataTable = filterTicketsData.filter(
        (value) => value.address === ticketId,
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
              <SelectTicketsStatus onChangeStatus={searchDataStatus} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Адрес" name="address" className="form-item">
              <SelectTicketsAddress
                dataAddress={addressList ? addressList : []}
                onChangeAddress={searchDataAddress}
              />
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
