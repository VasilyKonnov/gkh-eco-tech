import { List } from 'antd';
import { TMeterItem } from '../../store/meter';
import { MeteringCard } from '../MeteringCard';

type TMeteringListProps = {
  data: TMeterItem[];
};

export const MeteringList: React.FC<TMeteringListProps> = ({ data }) => (
  <List
    grid={{
      gutter: 48,
      xs: 1,
      sm: 1,
      md: 2,
      lg: 2,
      xl: 4,
      xxl: 4,
    }}
    dataSource={data}
    className="card-list"
    renderItem={(item) => (
      <List.Item style={{ minWidth: 50 }}>
        <MeteringCard item={item} />
      </List.Item>
    )}
  />
);
