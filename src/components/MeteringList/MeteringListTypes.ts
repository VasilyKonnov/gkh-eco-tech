import { TMeterItem } from '../../store/meter';

export type TMeteringListProps = {
  onSelectMeter: (id: number) => void;
  data: TMeterItem[];
};
