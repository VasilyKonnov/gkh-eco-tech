import { TMeterAddressItem } from '../../store/meter'
import { TTaskStatus } from '../../store/tickets'
import { EDateValue } from '../../utils/filter'

export type TTableRowItem = {
  key: number
  date: string
  status: string
  topic: string
  fio: string
  address: string
}

export type TTabTicketsHistoryViewProps = {
  onChangeFilter: (name: string, value: number | string) => void
  tableTicketsData?: TTableRowItem[]
  isLoading: boolean
  addressList: TMeterAddressItem[]
  statusList: TTaskStatus[]
}

export type TValuesFrom = {
  date: EDateValue
  status: string | null
  address: string | null
}
