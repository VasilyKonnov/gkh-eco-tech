import { createRef } from 'react'
import { Form } from 'antd'
import { getNormalizedPhoneValue } from '../../helpers/getNormalizedPhoneValue'
import { ticketsAction, ticketsSelector } from '../../store/tickets'
import { useDispatch, useSelector } from 'react-redux'
import { TabTicketsView } from './TabTicketsView'
import { TFormValues } from './TabTicketsTypes'
import { FetchingStateTypes } from '../../store'
import './TabTickets.css'

export const TabTickets: React.FC = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const fileRef = createRef<HTMLInputElement>()
  const { sendingTaskState } = useSelector(ticketsSelector)

  function makeFormData(values: TFormValues) {
    const formData = new FormData()
    const addressKeys = ['street', 'house', 'building', 'apartment']
    Object.entries(values).forEach((field) => {
      const [key, val] = field
      if (!val) return

      if (addressKeys.includes(key)) {
        formData.append(`address.${key}`, val as string)
      } else if (
        key === 'attachment' &&
        fileRef.current &&
        fileRef.current.files
      ) {
        formData.append(key, fileRef.current.files[0] as File)
      } else if (key === 'phone') {
        const phone = getNormalizedPhoneValue(val as string)
        formData.append(key, phone)
      } else {
        formData.append(key, val)
      }
    })
    return formData
  }

  function onSubmit(values: TFormValues) {
    const formData = makeFormData(values)
    dispatch(ticketsAction.create(formData, handlerClearForm))
  }

  function handlerClearForm() {
    form.resetFields()
  }

  return (
    <TabTicketsView
      form={form}
      onSubmit={onSubmit}
      fileRef={fileRef}
      isSending={sendingTaskState === FetchingStateTypes.loading}
    />
  )
}
