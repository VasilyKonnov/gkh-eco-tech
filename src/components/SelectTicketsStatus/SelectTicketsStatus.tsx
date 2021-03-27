import { Select } from 'antd'
import { TSelectTicketsProps } from './SelectTicketsStatusTypes'

const { Option } = Select

export const SelectTicketsStatus: React.FC<TSelectTicketsProps> = ({
  onChangeStatus,
  data,
}) => {
  return (
    <Select
      style={{ width: '100%' }}
      placeholder="Выберите статус"
      onChange={onChangeStatus}
      allowClear
    >
      {data.map((status) => (
        <Option value={status.id} key={status.id}>
          {status.title}
        </Option>
      ))}
    </Select>
  )
}
