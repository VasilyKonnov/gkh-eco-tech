import { Dispatch } from 'redux';
import { FetchingStateTypes } from '../types';
import { TCreateMeterProps } from '../../utils/api';

export type TMeterItem = {
  id: number;
  title: string;
  user: string;
  meters_type: number;
};

export type TMeterType = {
  id: number;
  title: string;
};

export type TMeterState = {
  fetchingState: FetchingStateTypes;
  types: TMeterType[];
  data: TMeterItem[];
  errorText: string;
};

export type TMeterAction = {
  list: () => (dispatch: Dispatch) => void;
  create: (post: TCreateMeterProps) => (dispatch: Dispatch) => void;
  getTypes: () => (dispatch: Dispatch) => void;
};
