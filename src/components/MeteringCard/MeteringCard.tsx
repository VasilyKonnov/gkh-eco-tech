import { Card } from 'antd';
import { blueColor, IconGas, IconRaindrop, redColor } from '../../assets/icons';

const { Meta } = Card;

type TMeteringCardProps = {
  item: {
    title: string;
    meters_type: number;
    // previous_value: number;
  };
};

// TODO: remove in constants
const meterIcons = [
  '',
  <IconRaindrop color={blueColor} />,
  <IconRaindrop color={redColor} />,
  <IconGas />,
];

export const MeteringCard: React.FC<TMeteringCardProps> = ({ item }) => {
  const { title, meters_type } = item;
  const icon = meterIcons[meters_type];

  return (
    <Card hoverable style={{ borderRadius: 8, background: '#f5f5f5' }}>
      <Meta
        avatar={icon}
        title={title}
        // description={`${previous_value} м.куб.`}
      />
    </Card>
  );
};
