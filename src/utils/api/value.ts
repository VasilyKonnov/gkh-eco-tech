import { axios } from '../../services';

export type TSendValueProps = {
  meter: number;
  value: number;
};

export const valueApi = {
  send: (post: TSendValueProps) => axios.post('/values/', post, { responseType: 'json' }),
};
