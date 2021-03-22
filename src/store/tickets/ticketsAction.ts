import { message } from 'antd'
import { openNotification } from '../../helpers'
import { TCreateTicketsProps, ticketsApi } from '../../utils/api/tickets'
import { addNewTicket, setTicketsData, ticketsFetching } from './ticketsSlice'
import { TTicketsAction } from './ticketsTypes'

export const ticketsAction: TTicketsAction = {
  list: () => (dispatch) => {
    dispatch(ticketsFetching())
    ticketsApi.list().then(({ data }) => {
      dispatch(setTicketsData({ data: data }))
    })
  },
  create: (formData) => (dispatch) => {
    ticketsApi
      .create(formData)
      .then((response: any) => {
        console.log(response)
        // @ts-ignore
        // eslint-disable-next-line no-restricted-globals
        if (status !== 200) throw new Error('Failed create tickets!')
        // @ts-ignore
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
  },
}
