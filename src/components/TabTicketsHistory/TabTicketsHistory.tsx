import { useDispatch, useSelector } from 'react-redux'
import { ticketsAction, ticketsSelector } from '../../store/tickets'
import { useCallback, useEffect, useState } from 'react'
import { TTableRowItem, TValuesFrom } from './TabTicketsHistoryTypes'
import { FetchingStateTypes } from '../../store'
import { TabTicketsHistoryView } from './TabTicketsHistoryView'
import { parseAddressValue } from '../../helpers'
import {
  EDateValue,
  filterByDate,
  filterByStatus,
  filterByAddressTicket,
} from '../../utils/filter'
import { sortByDate, fillUniqAddress } from './utils'

export const TabTicketsHistory: React.FC = () => {
  const { data: tasks, statuses: taskStatuses, fetchingState } = useSelector(
    ticketsSelector,
  )
  const dispatch = useDispatch()
  const [tableData, setTableData] = useState<TTableRowItem[]>([])
  const addressList = tasks.reduce(fillUniqAddress, [])
  const [valuesForm, setValuesForm] = useState<TValuesFrom>({
    date: EDateValue.all,
    status: null,
    address: null,
  })

  const refreshData = useCallback(() => {
    const { date, status, address } = valuesForm
    const getStatusName = (statusId: number) => {
      const [status] = taskStatuses.filter((status: any) => status.id === statusId)
      return status.title
    }

    const data = tasks
      .filter(
        (val: any) =>
          filterByStatus(status, val) &&
          filterByAddressTicket(address, val) &&
          filterByDate(date, val.created_at),
      )
      .sort(sortByDate)
      .map((val: any) => {
        return {
          key: val.id,
          date: new Date(val.created_at).toLocaleDateString('ru-Ru', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
          }),
          status: getStatusName(val.task_status),
          topic: val.subject,
          fio: `${val.surname} ${val.name} ${val.patronymic}`,
          address: parseAddressValue(val.address),
        }
      })

    setTableData(data)
  }, [taskStatuses, tasks, valuesForm])

  useEffect(() => {
    if (fetchingState === FetchingStateTypes.none) {
      dispatch(ticketsAction.list())
    }
  }, [dispatch, fetchingState])

  useEffect(() => {
    refreshData()
  }, [refreshData])

  function onChangeFilter(name: string, value: number | string) {
    const newState = {
      [name]: value,
    }
    setValuesForm({ ...valuesForm, ...newState })
  }

  return (
    <TabTicketsHistoryView
      tableTicketsData={tableData}
      isLoading={fetchingState === FetchingStateTypes.loading}
      addressList={addressList}
      statusList={taskStatuses}
      onChangeFilter={onChangeFilter}
    />
  )
}
