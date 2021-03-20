import { Select } from 'antd'

const { Option } = Select

type TSelectTicketsProps = {
  onChangeTickets?: (id: number | string) => void
  activeTickets?: number | string
}

export const SelectTickets: React.FC<TSelectTicketsProps> = ({
  onChangeTickets,
  activeTickets,
}) => {
  return (
    <Select
      style={{ width: '100%' }}
      placeholder="Выберите статус"
      onChange={onChangeTickets}
      value={activeTickets}
      allowClear
    >
      <Option value={'Новая'} key={1}>
        Новая
      </Option>
      <Option value={'Принята'} key={2}>
        Принята
      </Option>
      <Option value={'Выполнена'} key={3}>
        Выполнена
      </Option>
    </Select>
  )
}
