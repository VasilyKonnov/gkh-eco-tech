import { TMeterAddressItem } from './../meter/meterTypes';
import { Dispatch } from 'redux';
import { FetchingStateTypes } from '../types';

export type TTicketsItem = {
  id: number;
  subject: string;
  text: string;
  surname: string;
  name: string;
  patronymic: string;
  phone: string;
  email: string;
  created_at: string;
  completed_at: string;
  task_status: string;
  user: number;
  performer: number;
  attachment: string;
  address: TMeterAddressItem;
};

export type TTicketsState = {
  fetchingState: FetchingStateTypes;
  sendingTaskState: FetchingStateTypes;
  statuses: TTaskStatus[];
  data: TTicketsItem[];
  errorText: string;
};

export type TTaskStatus = {
  id: number;
  title: string;
};

export type TTicketsAction = {
  list: () => (dispatch: Dispatch) => void;
  create: (
    formData: any,
    cbClearForm: () => void
  ) => (dispatch: Dispatch) => void;
  getStatuses: () => (dispatch: Dispatch) => void;
};
