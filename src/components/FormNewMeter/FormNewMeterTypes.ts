import { TCreateMeterProps } from '../../utils/api';
import { TMeterType } from '../../store/meter';

export type TFormNewMeterProps = {
  visible?: boolean;
  cbShowModal?: () => void;
  onCreateMeter?: (values: TCreateMeterProps) => void;
  onCloseModalCreateMeter?: () => void;
  meterTypes: TMeterType[];
};
