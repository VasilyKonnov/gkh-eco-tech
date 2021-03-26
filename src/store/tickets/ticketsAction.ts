import { message } from 'antd';
import { openNotification } from '../../helpers';
import { ticketsApi } from '../../utils/api/tickets';
import {
  addNewTicket,
  setTicketsData,
  ticketsFetching,
  ticketSending,
  ticketSendingError,
  setTicketStatuses
} from './ticketsSlice';
import { TTicketsAction } from './ticketsTypes';

export const ticketsAction: TTicketsAction = {
  list: () => (dispatch) => {
    dispatch(ticketsFetching());
    ticketsApi.list().then(({ data }) => {
      dispatch(setTicketsData({ data: data }));
    });
  },
  create: (formData, cbClearForm) => (dispatch) => {
    dispatch(ticketSending());
    ticketsApi
      .create(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error('Failed create tickets!');
        }
        cbClearForm();
        dispatch(addNewTicket({ ticket: data }));
        message.success('Заявка отправлена!');
      })
      .catch(() => {
        openNotification({
          type: 'error',
          title: 'Ошибка!',
          text: 'Не удалось отправить заявку!',
        });
        dispatch(ticketSendingError());
      });
  },
  getStatuses: () => (dispatch) => {
    ticketsApi.getStatuses().then(({ data }) => {
      dispatch(setTicketStatuses({ statuses: data }));
    });
  },
};
