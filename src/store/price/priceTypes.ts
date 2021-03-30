import { FetchingStateTypes } from '../types';
import { Dispatch } from 'redux';

export type TPriceState = {
  fetchingState: FetchingStateTypes;
  data: TPriceItem[];
  errorText: string;
};

export type TPriceItem = {
  id: number;
  name: string;
  price: string;
};

export type TPriceAction = {
  list: () => (dispatch: Dispatch) => void;
};
