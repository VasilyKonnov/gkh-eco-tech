import { ChangeEvent, useState, useEffect, useCallback } from 'react';
import { Modal, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { userAction, userSelector } from '../../store/user';
import { FormInputPhone, FormInputPass } from '../../components';
import { useHistory } from 'react-router';
import imgLoginPage from '../../assets/image/loginpage.png';
import gplay from '../../assets/image/gplay.png';
import appstr from '../../assets/image/appstr.png';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import './LoginPage.css';

export const LoginPage = () => {
  const { Title } = Typography;
  const { isAuth, fetchingState } = useSelector(userSelector);
  const history = useHistory();
  const [phoneValue, setPhoneValue] = useState('');
  const [passValue, setPassValue] = useState('');
  const [requestPassword, setRequestPassword] = useState(true);
  const [isCheckedBox, setIsCheckedBox] = useState(false);
  const [isUserAgreementVisible, setIsUserAgreementVisible] = useState(false);
  const [isPersonalDataVisible, setIsPersonalDataVisible] = useState(false);
  const dispatch = useDispatch();

  const showModalUserAgreement = () => {
    setIsUserAgreementVisible(true);
  };

  const showModalPersonalData = () => {
    setIsPersonalDataVisible(true);
  };

  const showModalUserAgreementCallback = useCallback(() => {
    showModalUserAgreement();
  }, []);

  const showModalPersonalDataCallback = useCallback(() => {
    showModalPersonalData();
  }, []);

  const handlerCancelUserAgreement = () => {
    setIsUserAgreementVisible(false);
  };

  const handleCancelPersonalData = () => {
    setIsPersonalDataVisible(false);
  };

  useEffect(() => {
    isAuth && history.push('/');
  }, [history, isAuth]);

  const handlerPhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPhoneValue(value);
  };

  const handlerPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassValue(value);
  };

  function checkLengthPhone() {
    const phoneLength = phoneValue.slice(1).replace(/(\s)|(_)/g, '').length;
    return phoneLength === 11;
  }

  function handlerLogin() {
    dispatch(userAction.auth({ phone: phoneValue.slice(2).replace(/(\s)|(_)/g, '') }));
  }

  const handlerRequestPasswor = () => {
    setRequestPassword(false);
  };

  const changePhone = () => {
    setRequestPassword(true);
  };

  const handlerCheckedBox = (event: CheckboxChangeEvent) => {
    const checked = event.target.checked;
    setIsCheckedBox(checked);
  };

  return (
    <div className="auth-layout">
      <div className="auth-container">
        <img src={imgLoginPage} alt="Logo" />
        <Title>Вход в личный кабинет</Title>
        {requestPassword ? (
          <FormInputPhone
            phoneValue={phoneValue}
            handlerPhoneNumber={handlerPhoneNumber}
            checkLengthPhone={checkLengthPhone}
            handlerRequestPasswor={handlerRequestPasswor}
          />
        ) : (
          <FormInputPass
            changePhone={changePhone}
            handlerPassword={handlerPassword}
            passValue={passValue}
            canAgree={passValue.length !== 6}
            phoneValue={phoneValue}
            isCheckedBox={isCheckedBox}
            handlerLogin={handlerLogin}
            fetchingState={fetchingState}
            handlerCheckedBox={handlerCheckedBox}
            showModalUserAgreementCallback={showModalUserAgreementCallback}
            showModalPersonalDataCallback={showModalPersonalDataCallback}
          />
        )}

        <div className="auth-line-under-button"></div>
        <button className="auth-support-link">Служба поддержки</button>
        <div className="auth-play-stores">
          <img src={appstr} alt="Apple store icon" />
          <img src={gplay} alt="Google store icon" />
        </div>
      </div>
      <Modal
        footer={null}
        width={1000}
        title="Пользовательское соглашение"
        visible={isUserAgreementVisible}
        onCancel={handlerCancelUserAgreement}
      >
        <h1>Тут будет тест Пользовательского соглашения</h1>
      </Modal>
      <Modal
        footer={null}
        width={1000}
        title="Политика обработки персональных данных"
        visible={isPersonalDataVisible}
        onCancel={handleCancelPersonalData}
      >
        <h1>Тут будет тест соглашения c Политикой обработки персональных данных</h1>
      </Modal>
    </div>
  );
};
