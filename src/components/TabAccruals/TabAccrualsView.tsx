import { Table } from 'antd'
import { columns } from './dataColumns'
import { TTabAccruals } from './TabAccrualsType'

export const TabAccrualsView: React.FC<TTabAccruals> = ({ tableData }) => {
  return (
    <Table
      className="table-data-history"
      dataSource={tableData}
      columns={columns}
      pagination={false}
      scroll={{ x: 600 }}
    />
  )
}
