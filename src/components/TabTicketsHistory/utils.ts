import { TMeterAddressItem } from '../../store/meter'
import { TTicketsItem } from '../../store/tickets'

export const sortByDate = (cur: TTicketsItem, sec: TTicketsItem) =>
  Date.parse(sec.created_at) - Date.parse(cur.created_at)

export const fillUniqAddress = (
  acc: TMeterAddressItem[],
  cur: TTicketsItem,
) => {
  if (
    cur.address?.id &&
    !acc.some((addressItem) => addressItem.id === cur.address.id)
  )
    acc.push(cur.address)
  return acc
}
