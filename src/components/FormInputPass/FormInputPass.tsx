import { FC, memo } from 'react'
import { EyeOutlined } from '@ant-design/icons'
import { Input, Checkbox, Button, Typography } from 'antd'
import { Timer } from '../Timer'
import { TFormInputPassProps } from './FormInputPassTypes'
import { RightAgreementBox } from '../RightsAgreementBox'

const { Text } = Typography

export const FormInputPass: FC<TFormInputPassProps> = memo(
  ({
    onResendPass,
    onChangePass,
    passValue,
    phoneValue,
    isCheckedBox,
    isButtonDisable,
    handlerLogin,
    handlerSendPhone,
    loading,
    onChangeCheckedBox,
    canAgree,
    handlerSubmitLogin,
  }) => (
    <>
      <Text className="auth-instruction">
        Пожалуйста, введите одноразовый пароль отправленный на номер{' '}
        {phoneValue}
      </Text>
      <button className="auth-back-to-start" onClick={onResendPass}>
        Поменять номер
      </button>
      <div className="auth-wrapper">
        <form onSubmit={handlerSubmitLogin}>
          <Input
            maxLength={6}
            suffix={<EyeOutlined />}
            placeholder="Одноразовый пароль"
            onChange={onChangePass}
            value={passValue}
          />
          <Timer handlerSendPhone={handlerSendPhone} />
          <Button
            disabled={isButtonDisable}
            onClick={handlerLogin}
            loading={loading}
          >
            Войти
          </Button>
        </form>
      </div>
      <div className="auth-check-box-wrapp">
        <div className="auth-check-box">
          <Checkbox
            checked={isCheckedBox}
            onChange={onChangeCheckedBox}
            disabled={canAgree}
          />
        </div>
        <RightAgreementBox />
      </div>
    </>
  ),
)
