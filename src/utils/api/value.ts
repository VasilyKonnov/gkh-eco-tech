import { axios } from '../../services';

export type TSendValueProps = {
  meter: number;
  value: number;
  apartment: string;
  building: string;
  house: string;
  street: string;
};

export const valueApi = {
  send: (post: TSendValueProps) =>
    axios.post('/values/', post, { responseType: 'json' }),
};
