import { axios } from '../../services'

export type TCreateTicketsProps = {
  subject: string
  text: string
  surname: string
  name: string
  patronymic: string
  phone: string
  email: string
  // attachment: string
  address: {
    street: string
    house: string
    building: string
    apartment: string
  }
}

export const ticketsApi = {
  list: () => axios.get('/task/'),
  byId: (ticketsId: number) => axios.get(`/task/${ticketsId}/`),
  create: (post: TCreateTicketsProps) =>
    axios.post('/task/', post, {
      headers: {
        'Content-type':
          'multipart/form-data; boundary=----WebKitFormBoundaryK11RuNaQDkN53OI',
      },
    }),
  changeName: (meterId: number, post: TCreateTicketsProps) =>
    axios.put(`/task/${meterId}/`, post),
}
