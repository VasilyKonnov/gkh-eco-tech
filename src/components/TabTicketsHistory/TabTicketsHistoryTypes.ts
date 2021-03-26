export type TTableRowItem = {
  key: number
  date: string
  status: string
  topic: string
  fio: string
  address: string
}

export type TTabTicketsHistoryViewProps = {
  filterStatus: (value: number | string) => void
  filterAddress: (value: number | string) => void
  filterDate: (value: number | string) => void
  tableTicketsData?: TTableRowItem[]
  isLoading: boolean
  addressList?: string[]
  statusList?: string[]
}
