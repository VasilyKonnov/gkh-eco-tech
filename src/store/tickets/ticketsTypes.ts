import { Dispatch } from 'redux'
import { FetchingStateTypes } from '../types'

export type TTicketsItem = {
  id: number
  subject: string
  text: string
  surname: string
  name: string
  patronymic: string
  phone: string
  email: string
  created_at: string
  completed_at: string
  status: string
  user: number
  performer: number
  attachment: string
  address: {
    id: number
    street: string
    house: string
    building: string
    apartment: string
    user: number
  }
}

export type TTicketsState = {
  fetchingState: FetchingStateTypes
  data: TTicketsItem[]
  errorText: string
}

export type TTicketsAction = {
  list: () => (dispatch: Dispatch) => void
  create: (formData: any) => (dispatch: Dispatch) => void
}
