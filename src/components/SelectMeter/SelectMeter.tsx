import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { meterSelector } from '../../store/meter';

const { Option } = Select;

type TSelectMeterProps = {
  onChangeMeter?: (id: number | string) => void;
  activeMeter?: number | string;
};

export const SelectMeter: React.FC<TSelectMeterProps> = ({
  onChangeMeter,
  activeMeter,
}) => {
  const { data } = useSelector(meterSelector);
  return (
    <Select
      style={{ width: '100%' }}
      placeholder="Выберите счетчик"
      onChange={onChangeMeter}
      value={activeMeter}
      allowClear
    >
      {data.map((meter) => (
        <Option value={meter.id} key={meter.id}>
          {meter.title}
        </Option>
      ))}
    </Select>
  );
};
