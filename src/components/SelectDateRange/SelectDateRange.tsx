import { Select } from 'antd';
import { TSelectDateRangeProps } from './SelectDateRangeType';

const { Option } = Select;

export const SelectDateRange: React.FC<TSelectDateRangeProps> = ({
  onChangeRange,
}) => (
  <Select style={{ width: '100%' }} onChange={onChangeRange} defaultValue="all">
    <Option value="all">За все время</Option>
    <Option value="half-a-year">За пол-года</Option>
    <Option value="year">За год</Option>
  </Select>
);
