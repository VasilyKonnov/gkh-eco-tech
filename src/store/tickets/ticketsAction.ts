import { message } from 'antd'
import { openNotification } from '../../helpers'
import { TCreateTicketsProps, ticketsApi } from '../../utils/api/tickets'
import {
  addNewTicket,
  setTicketsData,
  ticketsFetching,
  clearFormFalse,
  clearFormTrue,
} from './ticketsSlice'
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
      .then(({ status, data }) => {
        dispatch(clearFormFalse())
        if (status !== 201) {
          throw new Error('Failed create tickets!')
          dispatch(clearFormFalse())
        }
        dispatch(addNewTicket({ ticket: data }))
        message.success('Заявка отправлена!')
        dispatch(clearFormTrue())
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
