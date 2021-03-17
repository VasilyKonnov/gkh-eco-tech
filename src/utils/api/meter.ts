import { axios } from '../../services';

export type TCreateMeterProps = {
  title: string;
  meters_type: number;
};

export const meterApi = {
  list: () => axios.get('/meter/'),
  byId: (meterId: number) => axios.get(`/meter/${meterId}/`),
  create: (post: TCreateMeterProps) => axios.post('/meter/', post),
  changeName: (meterId: number, post: TCreateMeterProps) =>
    axios.put(`/meter/${meterId}/`, post),
  getTypes: () => axios.get(`/metertypes/`),
};
