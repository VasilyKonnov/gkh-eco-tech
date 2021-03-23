import { Select } from 'antd';
import { TSelectAddressProps } from './SelectAddressType';
import { parseAddressValue } from '../../helpers';

const { Option } = Select;

export const SelectAddress: React.FC<TSelectAddressProps> = ({
  onChangeAddress,
  data,
}) => (
  <Select
    style={{ width: '100%' }}
    onChange={onChangeAddress}
    placeholder="Выберите адрес"
    allowClear
  >
    {data.map((address) => (
      <Option value={address.id} key={address.id}>
        {parseAddressValue(address)}
      </Option>
    ))}
  </Select>
);
