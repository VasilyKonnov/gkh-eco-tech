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
      <Option value={'new'} key={1}>
        Новая
      </Option>
      <Option value={'recieved'} key={2}>
        Принята
      </Option>
      <Option value={'in_work'} key={3}>
        В работе
      </Option>
      <Option value={'rejected'} key={3}>
        Отклонена
      </Option>
      <Option value={'complete'} key={3}>
        Выполнена
      </Option>
    </Select>
  )
}
