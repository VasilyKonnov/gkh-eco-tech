import { Select } from 'antd';
import { TMeterItem } from '../../store/meter';
const { Option } = Select;

type SelectMeterTypeProps = {
  onTypeMeterChange: (value: string) => void;
  data: TMeterItem[];
};

export const SelectMeterType: React.FC<SelectMeterTypeProps> = ({ data }) => (
  <Select style={{ width: '100%' }} placeholder="Выберите тип">
    {data.map((meter) => (
      <Option value={meter.id} key={meter.id}>
        {meter.title}
      </Option>
    ))}
  </Select>
);
