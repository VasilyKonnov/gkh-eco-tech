import { TabAccrualsView } from './TabAccrualsView'
import { TTabAccruals } from './TabAccrualsType'

export const TabAccruals: React.FC<TTabAccruals> = ({ tableData }) => {
  return <TabAccrualsView tableData={tableData} />
}
