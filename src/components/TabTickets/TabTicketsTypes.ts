import { RefObject } from 'react'
import { FormInstance } from 'antd'

export type TFormValues = {
  subject: string
  text: string
  surname: string
  name: string
  patronymic: string
  phone: string
  email: string
  attachment: string | Blob
  street: string
  house: string
  building: string
  apartment: string
}

export type TTabTicketsProps = {
  form: FormInstance
  onSubmit: (values: TFormValues) => void
  fileRef: RefObject<HTMLInputElement>
  isSending: boolean
}

export type TSendTaskValues = {
  subject: string
  text: string
  surname: string
  name: string
  patronymic: string
  phone: string
  email: string
  attachment: string
  address: {
    street: string
    house: string
    building: string
    apartment: string
  }
}
