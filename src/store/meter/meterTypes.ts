import { Dispatch } from 'redux';
import { FetchingStateTypes } from '../types';
import { TCreateMeterProps } from '../../utils/api';
import { TSendValueProps } from '../../utils/api';

export type TMeterItem = {
  id: number;
  title: string;
  user: string;
  meters_type: number;
  previous_value: string;
  address: TMeterAddressItem;
};

export type TMeterAddress = {
  address: {
    street: string;
    house: string;
    building: string;
    apartment: string;
  };
};

export type TMeterAddressItem = {
  id: number;
  street: string;
  house: string;
  building: string;
  apartment: string;
};

export type TMeterType = {
  id: number;
  title: string;
  measure: string;
};

export type TMeterState = {
  fetchingState: FetchingStateTypes;
  types: TMeterType[];
  data: TMeterItem[];
  errorText: string;
  visibleModalAddMeter: boolean;
};

export type TMeterAction = {
  list: () => (dispatch: Dispatch) => void;
  create: (
    post: TCreateMeterProps,
    cbCloseForm: () => void
  ) => (dispatch: Dispatch) => void;
  getTypes: () => (dispatch: Dispatch) => void;
  fillAddress: (values: TSendValueProps) => (dispatch: Dispatch) => void;
};
