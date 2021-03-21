import { Card } from 'antd';
import { TMeteringCardProps } from './MeteringCardTypes';
import { getMeterIcon } from '../../helpers';

const { Meta } = Card;

export const MeteringCard: React.FC<TMeteringCardProps> = ({
  meter,
  onSelect,
}) => {
  const { id, title, meters_type, previous_value } = meter;
  const icon = getMeterIcon(meters_type);

  return (
    <Card
      hoverable
      style={{ borderRadius: 8, background: '#f5f5f5' }}
      onClick={() => onSelect(id)}
    >
      <Meta
        avatar={icon}
        title={title}
        description={`${+previous_value} м.куб.`}
      />
    </Card>
  );
};
