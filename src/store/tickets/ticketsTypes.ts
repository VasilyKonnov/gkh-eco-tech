import { TMeterAddressItem } from './../meter/meterTypes'
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
  task_status: number
  user: number
  performer: number
  attachment: string
  address: TMeterAddressItem
}

export type TTicketsState = {
  fetchingState: FetchingStateTypes
  sendingTaskState: FetchingStateTypes
  statuses: TTaskStatus[]
  data: TTicketsItem[]
  errorText: string
}

export type TTaskStatus = {
  id: number
  title: string
}

export type TFormData = {
  address: {
    id: number
    street: string
    house: string
    building?: string | number
    apartment?: string | number
    user: number
  }
  attachment?: any
  completed_at: string
  created_at: string
  email: string
  id: number
  name: string
  patronymic: string
  performer?: string | number
  phone: string
  subject: string
  surname: string
  task_status: number
  text: string
  user: number
}

export type TTicketsAction = {
  list: () => (dispatch: Dispatch) => void
  create: (
    formData: any,
    cbClearForm: () => void,
  ) => (dispatch: Dispatch) => void
  getStatuses: () => (dispatch: Dispatch) => void
}
