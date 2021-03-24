import { useCallback, useState } from 'react'
import { Typography, Modal } from 'antd'
import { userAgreementText, userPrivacyPolicy } from './constants'
import './RightAgreementBox.css'

export const RightAgreementBox = () => {
  const [isUserAgreementVisible, setIsUserAgreementVisible] = useState(false)
  const [isPersonalDataVisible, setIsPersonalDataVisible] = useState(false)
  const handleCancelUserAgreement = () => setIsUserAgreementVisible(false)
  const handleCancelPersonalData = () => setIsPersonalDataVisible(false)
  const showModalUserAgreement = useCallback(
    () => setIsUserAgreementVisible(true),
    [setIsUserAgreementVisible],
  )
  const showModalPersonalData = useCallback(
    () => setIsPersonalDataVisible(true),
    [setIsPersonalDataVisible],
  )

  return (
    <>
      <Typography.Text>
        Я согласен c{' '}
        <span className="polit-agree" onClick={showModalUserAgreement}>
          Пользовательского соглашения
        </span>{' '}
        и{' '}
        <span className="polit-agree" onClick={showModalPersonalData}>
          Политикой обработки персональных данных.
        </span>
      </Typography.Text>
      <Modal
        footer={null}
        width={1000}
        title="Пользовательское соглашение"
        visible={isUserAgreementVisible}
        onCancel={handleCancelUserAgreement}
      >
        {userAgreementText}
      </Modal>
      <Modal
        footer={null}
        width={1000}
        title="Политика обработки персональных данных"
        visible={isPersonalDataVisible}
        onCancel={handleCancelPersonalData}
      >
        {userPrivacyPolicy}
      </Modal>
    </>
  )
}
