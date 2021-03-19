import { List } from 'antd';
import { useSelector } from 'react-redux';
import { FetchingStateTypes } from '../../store';
import { meterSelector } from '../../store/meter';
import { MeteringCard } from '../MeteringCard';
import { TMeteringListProps } from './MeteringListTypes';

export const MeteringList: React.FC<TMeteringListProps> = ({
  data,
  onSelectMeter,
}) => {
  const { fetchingState } = useSelector(meterSelector);

  return (
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
      loading={fetchingState === FetchingStateTypes.loading}
      className="card-list"
      renderItem={(item) => (
        <List.Item style={{ minWidth: 50 }}>
          <MeteringCard
            meter={item}
            onSelect={(id: number) => onSelectMeter(id)}
          />
        </List.Item>
      )}
    />
  );
};
