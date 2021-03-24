export type TTabTicketsHistoryTypes = {
  key: number
  date: string
  status: string
  topic: string
  fio: string
  address: string
}

type TSelectTicketsProps = {
  onChangeStatus?: (id: number | string) => void
  activeTickets?: number | string
}