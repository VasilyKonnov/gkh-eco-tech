import { Row, Col, Table, Form } from 'antd'
import { SelectDateRange } from '../SelectDateRange'
import { SelectMeter } from '../SelectMeter'
import { SelectAddress } from '../SelectAddress'
import { useDispatch, useSelector } from 'react-redux'
import { meterSelector } from '../../store/meter'
import { valueSelector } from '../../store/value/valueSelector'
import { useCallback, useEffect, useState } from 'react'
import { FetchingStateTypes } from '../../store'
import { valueAction } from '../../store/value'
import { EmptyBox } from '../EmptyBox'

type TValueItem = {
  key: number
  meter: string
  value: number
  date: string
  address: string
}
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
      title: 'Значение',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Адрес',
      dataIndex: 'address',
      key: 'address',
    },
  ]
  const { data: meters, types: meterTypes } = useSelector(meterSelector)
  const addressList = meters.map((meter) => meter.address)
  const { fetchingState, data: values } = useSelector(valueSelector)
  const dispatch = useDispatch()
  const [tableData, setTableData] = useState<TValueItem[]>([])
  const getMeterTitle = useCallback(
    (meterId: number) => {
      const [meter] = meters.filter((meter) => meter.id === meterId)
      return meter.title
    },
    [meters],
  )
  const getMeterAddress = useCallback(
    (meterId: number) => {
      const [meter] = meters.filter((meter) => meter.id === meterId)
      const { street, house, building, apartment } = meter.address
      return `${street} дом ${house}  ${building || ''} ${apartment || ''}`
    },
    [meters],
  )

  useEffect(() => {
    if (fetchingState === FetchingStateTypes.none) {
      dispatch(valueAction.list())
    }
  }, [dispatch, fetchingState])

  useEffect(() => {
    const date = values.map((val) => {
      return {
        key: val.id,
        date: new Date(val.date).toLocaleDateString('en-GB'),
        meter: getMeterTitle(val.meter),
        value: val.value,
        address: getMeterAddress(val.meter),
      }
    })

    setTableData(date)
  }, [getMeterAddress, getMeterTitle, meterTypes, values])

  function refreshData(meterId: number | string) {
    if (meterId) {
      const date = values
        .filter((val) => val.meter === meterId)
        .map((val) => {
          return {
            key: val.id,
            date: new Date(val.date).toLocaleDateString('en-GB'),
            meter: getMeterTitle(val.meter),
            value: val.value,
            address: getMeterAddress(val.meter),
          }
        })
      setTableData(date)
    } else {
      const date = values.map((val) => {
        return {
          key: val.id,
          date: new Date(val.date).toLocaleDateString('en-GB'),
          meter: getMeterTitle(val.meter),
          value: val.value,
          address: getMeterAddress(val.meter),
        }
      })
      setTableData(date)
    }
  }

  return (
    <EmptyBox text="Нет данных для отображения">
      <Form layout="vertical" size="large">
        <Row justify="space-between" gutter={[16, 16]}>
          <Col span={8}>
            <Form.Item label="Дата" name="date" className="form-item">
              <SelectDateRange onChangeRange={() => {}} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Счетчик" name="meter" className="form-item">
              <SelectMeter onChangeMeter={refreshData} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Адрес" name="address" className="form-item">
              <SelectAddress onChangeAddress={() => {}} data={addressList} />
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
  )
}
