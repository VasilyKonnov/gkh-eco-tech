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

export function getMeterIcon(meters_type: number) {
  const meterIcons: TMeterIconVariant = {
    1: <IconRaindrop color={blueColor} />,
    2: <IconRaindrop color={redColor} />,
    3: <IconGas />,
    4: <IconElectricity />,
  };
  return meterIcons[meters_type];
}
