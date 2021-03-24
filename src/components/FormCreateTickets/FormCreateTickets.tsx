import { createRef } from 'react';
import { Form } from 'antd';
import { getNormalizedPhoneValue } from '../../helpers/getNormalizedPhoneValue';
import { ticketsAction, ticketsSelector } from '../../store/tickets';
import { useDispatch, useSelector } from 'react-redux';
import { FormCreateTicketsView } from './FormCreateTicketsView';
import { TFormValues } from './FormCreateTicketsTypes';
import './FormCreateTickets.css';
import { FetchingStateTypes } from '../../store';

export const FormCreateTickets: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const fileRef = createRef<HTMLInputElement>();
  const { sendingTaskState } = useSelector(ticketsSelector);

  function makeFormData(values: TFormValues) {
    const formData = new FormData();
    const addressKeys = ['street', 'house', 'building', 'apartment'];
    // const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    Object.entries(values).forEach((field) => {
      const [key, val] = field;
      if (!val) return;

      if (addressKeys.includes(key)) {
        formData.append(`address.${key}`, val as string);
      } else if (
        key === 'attachment' &&
        fileRef.current &&
        fileRef.current.files
      ) {
        formData.append(key, fileRef.current.files[0] as File);
      } else if (key === 'phone') {
        const phone = getNormalizedPhoneValue(val as string);
        formData.append(key, phone);
      } else {
        formData.append(key, val);
      }
    });
    return formData;
  }

  function onSubmit(values: TFormValues) {
    const formData = makeFormData(values);
    dispatch(ticketsAction.create(formData, handlerClearForm));
  }

  function handlerClearForm() {
    form.resetFields();
  }

  return (
    <FormCreateTicketsView
      form={form}
      onSubmit={onSubmit}
      fileRef={fileRef}
      isSending={sendingTaskState === FetchingStateTypes.loading}
    />
  );
};
