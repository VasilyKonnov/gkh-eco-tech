import { Select } from 'antd'
import { TSelectTicketsProps } from './SelectTicketsStatusTypes'

const { Option } = Select

export const SelectTicketsStatus: React.FC<TSelectTicketsProps> = ({
  onChangeStatus,
  statusList,
}) => {
  return (
    <Select
      style={{ width: '100%' }}
      placeholder="Выберите статус"
      onChange={onChangeStatus}
      allowClear
    >
      {statusList
        ? statusList.map((status: string, id: number) => (
            <Option value={status} key={id}>
              {`${status}`}
            </Option>
          ))
        : ''}
      {/* <Option value={'new'} key={1}>
        Новая
      </Option>
      <Option value={'recieved'} key={2}>
        Принята
      </Option>
      <Option value={'in work'} key={4}>
        В работе
      </Option>
      <Option value={'rejected'} key={5}>
        Отклонена
      </Option>
      <Option value={'complete'} key={6}>
        Выполнена
      </Option> */}
    </Select>
  )
}
