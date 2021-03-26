import { TMeterAddressItem } from './../../store/meter/meterTypes'

export type TSelectAddressProps = {
  data: TMeterAddressItem[]
  onChangeAddress: (id: number | string) => void
}
