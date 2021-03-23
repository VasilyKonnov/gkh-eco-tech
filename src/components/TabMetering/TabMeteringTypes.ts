import { FormInstance } from 'antd';
import { TSendValueProps } from '../../utils/api';

export type TabMeteringViewProps = {
  onSubmit: (value: TSendValueProps) => void;
  onShowAllMeters: () => void;
  meterListComponent: React.ReactNode;
  onChangeMeter?: (id: number | string) => void;
  activeMeter: number | string;
  onTypeMeterChange?: (value: string) => void;
  onAddMeter: () => void;
  form: FormInstance;
  countMeters: number;
  prevValue: string;
  onClearMeter: () => void;
};
