export type TTabAccrualsRow = {
  key: string
  date: string
  operation: string
  assessed: string
  paidUp: string
  penaltyPaid: string
  commission: string
  balans: string
  check: string
}
export type TTabAccruals = {
  tableData: TTabAccrualsRow[]
}
