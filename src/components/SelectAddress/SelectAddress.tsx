import { Select } from 'antd';
import { TSelectAddressProps } from './SelectAddressType';

const { Option } = Select;

export const SelectAddress: React.FC<TSelectAddressProps> = ({
  onChangeAddress,
}) => (
  <Select style={{ width: '100%' }} onChange={onChangeAddress} placeholder="Выберите адрес">
    <Option value="all">Московское шоссе</Option>
  </Select>
);
