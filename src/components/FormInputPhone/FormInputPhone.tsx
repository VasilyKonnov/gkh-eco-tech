import { Button } from 'antd'
import MaskedInput from 'antd-mask-input'
import { TFormInputPhoneProps } from './FormInputPhoneTypes'

export const FormInputPhone: React.FC<TFormInputPhoneProps> = ({
  phoneValue,
  handlerSendPhone,
  onChangePhone,
  phoneLengthIsValid,
  loading,
  handlerSubmitPhone,
}) => (
  <>
    <div className="auth-wrapper">
      <form onSubmit={handlerSubmitPhone}>
        <MaskedInput
          type="tel"
          name="phone"
          mask="+1 111 111 11 11"
          placeholder="Номер телефона"
          onChange={onChangePhone}
          value={phoneValue}
        />
        <Button
          disabled={phoneLengthIsValid}
          onClick={handlerSendPhone}
          loading={loading}
        >
          Далее
        </Button>
      </form>
    </div>
    <button className="auth-try-demo">Демо-режим</button>
  </>
)
