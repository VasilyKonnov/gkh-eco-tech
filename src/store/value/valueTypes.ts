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
  previous_value: number;
  date: Date;
};

export type TValueAction = {
  send: (post: TSendValueProps) => (dispatch: Dispatch) => void;
}