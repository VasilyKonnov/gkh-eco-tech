import { Select } from 'antd'
import { TSelectTicketsProps } from './SelectTicketsStatusTypes'

const { Option } = Select

export const SelectTicketsStatus: React.FC<TSelectTicketsProps> = ({
  onChangeStatus,
  activeTickets,
}) => {
  return (
    <Select
      style={{ width: '100%' }}
      placeholder="Выберите статус"
      onChange={onChangeStatus}
      value={activeTickets}
      allowClear
    >
      <Option value={'Новая'} key={1}>
        Новая
      </Option>
      <Option value={'Принята'} key={2}>
        Принята
      </Option>
      <Option value={'В работе'} key={4}>
        В работе
      </Option>
      <Option value={'Отклонена'} key={5}>
        Отклонена
      </Option>
      <Option value={'Выполнена'} key={6}>
        Выполнена
      </Option>
    </Select>
  )
}
