import { ChangeEvent, useState, useEffect, useCallback } from 'react'
import { Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
  userAction,
  userSelector,
  setStateDeliveryPass,
} from '../../store/user'
import { FetchingStateTypes } from '../../store'
import { FormInputPhone, FormInputPass } from '../../components'
import { useHistory } from 'react-router'
import { getNormalizedPhoneValue, phoneLengthIsValid } from '../../helpers'
import imgLoginPage from '../../assets/image/loginpage.png'
import gplay from '../../assets/image/gplay.png'
import appstr from '../../assets/image/appstr.png'
import './LoginPage.css'

export const LoginPage: React.FC = () => {
  const { Title } = Typography
  const { isAuth, fetchingState, passDeliveryState } = useSelector(userSelector)
  const history = useHistory()
  const dispatch = useDispatch()
  const [phoneValue, setPhoneValue] = useState('')
  const [passValue, setPassValue] = useState('')
  const [isCheckedBox, setIsCheckedBox] = useState(false)
  const [isButtonDisable, setIsButtonDisable] = useState(true)

  useEffect(() => {
    isAuth && history.push('/')
  }, [history, isAuth])

  useEffect(() => {
    if (!isCheckedBox || passValue.length !== 6) {
      setIsButtonDisable(true)
    } else {
      setIsButtonDisable(false)
    }
  }, [isCheckedBox, passValue])

  const onChangePhone = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      setPhoneValue(value)
    },
    [setPhoneValue],
  )

  const onChangePass = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setPassValue(value)
  }

  const onChangeCheckedBox = useCallback(() => {
    setIsCheckedBox(!isCheckedBox)
  }, [isCheckedBox])

  function handlerSendPhone() {
    dispatch(
      userAction.sendMobile({
        mobile: getNormalizedPhoneValue(phoneValue),
      }),
    )
    setPassValue('')
  }

  function onResendPass() {
    dispatch(setStateDeliveryPass({ deliveryState: false }))
  }

  function handlerLogin() {
    dispatch(
      userAction.token({
        mobile: getNormalizedPhoneValue(phoneValue),
        token: passValue,
        agree: isCheckedBox,
      }),
    )
  }

  return (
    <div className="auth-layout">
      <div className="auth-container">
        <img src={imgLoginPage} alt="Logo" />
        <Title>Вход в личный кабинет</Title>
        {!passDeliveryState ? (
          <FormInputPhone
            phoneValue={phoneValue}
            onChangePhone={onChangePhone}
            handlerSendPhone={handlerSendPhone}
            phoneLengthIsValid={phoneLengthIsValid(phoneValue)}
            loading={fetchingState === FetchingStateTypes.loading}
          />
        ) : (
          <FormInputPass
            onResendPass={onResendPass}
            onChangePass={onChangePass}
            passValue={passValue}
            canAgree={passValue.length !== 6}
            isButtonDisable={isButtonDisable}
            phoneValue={phoneValue}
            isCheckedBox={isCheckedBox}
            handlerLogin={handlerLogin}
            handlerSendPhone={handlerSendPhone}
            loading={fetchingState === FetchingStateTypes.loading}
            onChangeCheckedBox={onChangeCheckedBox}
          />
        )}
        <div className="auth-line-under-button"></div>
        <button className="auth-support-link">Служба поддержки</button>
        <div className="auth-play-stores">
          <img src={appstr} alt="Apple store icon" />
          <img src={gplay} alt="Google store icon" />
        </div>
      </div>
    </div>
  )
}
