import { message } from 'antd'
import { openNotification } from '../../helpers'
import { TCreateTicketsProps, ticketsApi } from '../../utils/api'
import { addNewTicket, setTicketsData, ticketsFetching } from './ticketsSlice'
import { TTicketsAction } from './ticketsTypes'

export const ticketsAction: TTicketsAction = {
  list: () => (dispatch) => {
    dispatch(ticketsFetching())
    ticketsApi.list().then(({ data }) => {
      dispatch(setTicketsData({ data: data }))
    })
  },
  create: (post: TCreateTicketsProps) => (dispatch: any) => {
    ticketsApi.create(post).then(({ data }) => {
      ticketsApi
        .create(post)
        .then(({ data, status }) => {
          if (status !== 201) throw new Error('Failed create tickets!')
          dispatch(addNewTicket({ ticket: data }))
          message.success('Заявка отправлена!')
        })
        .catch(() => {
          openNotification({
            type: 'error',
            title: 'Ошибка!',
            text: 'Не удалось отправить  заявку!',
          })
        })
    })
  },
}
