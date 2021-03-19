import { Dispatch } from 'redux';
import { FetchingStateTypes } from '../types';
import { TSendValueProps } from '../../utils/api';

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
  date: Date;
};

export type TValueAction = {
  list: () => (dispatch: Dispatch) => void;
  send: (
    values: TSendValueProps,
    onResetFields: () => void
  ) => (dispatch: Dispatch) => void;
};
