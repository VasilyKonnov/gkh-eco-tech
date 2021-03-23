import { Dispatch } from 'redux';
import { FetchingStateTypes } from '../types';
import { TSendValueProps } from '../../utils/api';
import { TMeterAddressItem } from '../meter';

export type TValueState = {
  fetchingState: FetchingStateTypes;
  data: TValueItem[];
  errorText: string;
};

export type TValueItem = {
  id: number;
  meter: number;
  value: number;
  previous_value: number;
  date: string;
  address: TMeterAddressItem;
};

export type TValueAction = {
  list: () => (dispatch: Dispatch) => void;
  send: (
    values: TSendValueProps,
    onResetFields: () => void
  ) => (dispatch: Dispatch) => void;
};
