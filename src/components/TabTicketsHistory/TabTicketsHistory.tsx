import { useDispatch, useSelector } from 'react-redux'
import { ticketsAction, ticketsSelector } from '../../store/tickets'
import { useEffect, useState } from 'react'
import { TTableRowItem } from './TabTicketsHistoryTypes'
import { FetchingStateTypes } from '../../store'
import { uniqueVal } from '../../utils/common'
import { TabTicketsHistoryView } from './TabTicketsHistoryView'

export const TabTicketsHistory = () => {
  const { data, fetchingState } = useSelector(ticketsSelector)
  const dispatch = useDispatch()

  const [tableTicketsData, setTableTicketsData] = useState<TTableRowItem[]>()
  const [filterTicketsData, setFilterTicketsData] = useState<TTableRowItem[]>()
  const [addressList, setAddressList] = useState<string[]>()
  const [statusList, setStatusList] = useState<string[]>()

  const [statusForFilter, setStatusForFilter] = useState<
    number | string | undefined
  >()
  const [addressForFilter, setAddressForFilter] = useState<
    number | string | undefined
  >()

  const getAddressList = () => {
    if (filterTicketsData) {
      let addressList = filterTicketsData.map((tickets) => tickets.address)
      addressList = addressList.filter(uniqueVal)
      setAddressList(addressList)
    }
  }
  const getStatusList = () => {
    if (filterTicketsData) {
      let statusList = filterTicketsData.map((tickets) => tickets.status)
      statusList = statusList.filter(uniqueVal)
      setStatusList(statusList)
    }
  }
  const getTableTicketsData = () => {
    const getTicketsData = data.map((tableData: any, id: number) => {
      return {
        key: id + 1,
        date: new Date(tableData.created_at).toLocaleDateString('ru-Ru', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        }),

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
  }

  const filterStatus = (status: number | string) => {
    if (status && filterTicketsData) {
      const dataTable = filterTicketsData.filter(
        (value) => value.status === status,
      )
      setTableTicketsData(dataTable)
    } else if (data) {
      getTableTicketsData()
    }
  }
  const filterAddress = (address: number | string) => {
    if (address && filterTicketsData) {
      const dataTable = filterTicketsData.filter(
        (value) => value.address === address,
      )
      setTableTicketsData(dataTable)
    } else if (data) {
      getTableTicketsData()
    }
  }
  const filterDate = (date: number | string) => {
    console.log('filterDate ', date)
  }

  useEffect(() => {
    if (fetchingState === FetchingStateTypes.none) {
      dispatch(ticketsAction.list())
    }
  }, [dispatch, fetchingState])

  useEffect(() => {
    getTableTicketsData()
  }, [data, fetchingState])

  useEffect(() => {
    getAddressList()
    getStatusList()
  }, [filterTicketsData])

  return (
    <TabTicketsHistoryView
      filterStatus={filterStatus}
      filterAddress={filterAddress}
      tableTicketsData={tableTicketsData}
      isLoading={fetchingState === FetchingStateTypes.loading}
      addressList={addressList}
      statusList={statusList}
      filterDate={filterDate}
    />
  )
}
