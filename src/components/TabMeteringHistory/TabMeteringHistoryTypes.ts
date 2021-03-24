import { TMeterAddressItem } from '../../store/meter';

export type TValuesForm = {
  date: string | null;
  meter: string | null;
  address: string | null;
};

export type TTableRowItem = {
  key: number;
  date: string;
  meter: string;
  value: number;
  address: string;
};

export type TTabMeteringHistoryViewProps = {
  handlerChangeValue: (name: string, value: number | string) => void;
  addresses: TMeterAddressItem[];
  isLoading: boolean;
  tableData: TTableRowItem[];
};
