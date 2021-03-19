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
  list: () => axios.get('/values/'),
  send: (post: TSendValueProps) =>
    axios.post('/values/', post, { responseType: 'json' }),
};
