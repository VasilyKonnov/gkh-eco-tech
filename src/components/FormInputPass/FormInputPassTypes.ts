export type TFormInputPassProps = {
  passValue: string | number | undefined
  phoneValue: string | number | undefined
  onChangePass: (event: React.ChangeEvent<HTMLInputElement>) => void
  onResendPass: () => void
  isCheckedBox: boolean
  isButtonDisable: boolean | undefined
  handlerLogin: React.MouseEventHandler<HTMLElement>
  handlerSendPhone: () => void
  loading: boolean
  onChangeCheckedBox: () => void
  canAgree: boolean
}
