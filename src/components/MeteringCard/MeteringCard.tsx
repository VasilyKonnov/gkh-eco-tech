import { Card } from 'antd';
import { TMeteringCardProps, TMeterIconVariant } from './MeteringCardTypes';
import {
  blueColor,
  IconGas,
  IconRaindrop,
  redColor,
  IconElectricity,
} from '../../assets/icons';

const { Meta } = Card;

export const MeteringCard: React.FC<TMeteringCardProps> = ({
  meter,
  onSelect,
}) => {
  const { id, title, meters_type, previous_value } = meter;
  const meterIcons: TMeterIconVariant = {
    1: <IconRaindrop color={blueColor} />,
    2: <IconRaindrop color={redColor} />,
    3: <IconGas />,
    4: <IconElectricity />,
  };
  const icon = meterIcons[meters_type];

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
