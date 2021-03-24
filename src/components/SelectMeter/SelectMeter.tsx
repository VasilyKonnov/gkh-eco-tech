import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { meterSelector } from '../../store/meter';
import { IconText } from '../IconText';

const { Option } = Select;

type TSelectMeterProps = {
  onChangeMeter?: (id: number | string) => void;
  activeMeter?: number | string;
  onClearMeter?: () => void;
};

export const SelectMeter: React.FC<TSelectMeterProps> = ({
  onChangeMeter,
  activeMeter,
  onClearMeter,
}) => {
  const { data } = useSelector(meterSelector);

  return (
    <Select
      style={{ width: '100%' }}
      placeholder="Выберите счетчик"
      onChange={onChangeMeter}
      value={activeMeter}
      allowClear
      onClear={onClearMeter}
    >
      {data.map((meter) => (
        <Option value={meter.id} key={meter.id}>
          <IconText meters_type={meter.meters_type} text={meter.title} />
        </Option>
      ))}
    </Select>
  );
};
