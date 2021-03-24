import { Select } from 'antd'
import { TSelectAddressProps } from './SelectTicketsAddressType'

const { Option } = Select

export const SelectTicketsAddress: React.FC<TSelectAddressProps> = ({
  onChangeAddress,
  dataAddress,
}) => (
  <Select
    style={{ width: '100%' }}
    onChange={onChangeAddress}
    placeholder="Выберите адрес"
    allowClear
  >
    {dataAddress.map((address, id) => (
      <Option value={address} key={id}>
        {`${address}`}
      </Option>
    ))}
  </Select>
)
