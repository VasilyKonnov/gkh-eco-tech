import {
  blueColor,
  IconGas,
  IconRaindrop,
  redColor,
  IconElectricity,
} from '../assets/icons';

type TMeterIconVariant = {
  [key: number]: React.ReactNode;
};

export function getMeterIcon(meters_type: number, size = 40) {
  const meterIcons: TMeterIconVariant = {
    1: <IconRaindrop color={blueColor} size={size} />,
    2: <IconRaindrop color={redColor} size={size} />,
    3: <IconGas size={size} />,
    4: <IconElectricity size={size} />,
  };
  return meterIcons[meters_type];
}
