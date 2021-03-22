export type FormCreateTicketsTypes = {
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
