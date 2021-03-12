import { ChangeEvent, useState, useEffect } from 'react';
import { Modal, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { userAction, userSelector } from '../../store/user';
import { FormInputPhone, FormInputPass } from '../../components';
import { useHistory } from 'react-router';
import imgLoginPage from '../../assets/image/loginpage.png';
import gplay from '../../assets/image/gplay.png';
import appstr from '../../assets/image/appstr.png';
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
  const handleCancelUserAgreement = () => {
    setIsUserAgreementVisible(false);
  };

  const showModalPersonalData = () => {
    setIsPersonalDataVisible(true);
  };
  const handleCancelPersonalData = () => {
    setIsPersonalDataVisible(false);
  };

  useEffect(() => {
    isAuth && history.push('/');
  }, [history, isAuth]);

  const handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPhoneValue(value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassValue(value);
  };

  function checkLengthPhone() {
    const phoneLength = phoneValue.slice(1).replace(/(\s)|(_)/g, '').length;
    return phoneLength === 11;
  }

  function handleLogin() {
    // event.preventDefault();

    dispatch(
      userAction.auth({ phone: phoneValue.slice(2).replace(/(\s)|(_)/g, '') })
    );
  }

  return (
    <div className="auth-layout">
      <div className="auth-container">
        <img src={imgLoginPage} alt="Logo" />
        <Title>Вход в личный кабинет</Title>
        {requestPassword ? (
          <FormInputPhone
            phoneValue={phoneValue}
            setRequestPassword={setRequestPassword}
            handlePhoneNumber={handlePhoneNumber}
            checkLengthPhone={checkLengthPhone}
          />
        ) : (
          <FormInputPass
            setRequestPassword={setRequestPassword}
            handlePassword={handlePassword}
            passValue={passValue}
            canAgree={passValue.length !== 6}
            phoneValue={phoneValue}
            isCheckedBox={isCheckedBox}
            handleLogin={handleLogin}
            fetchingState={fetchingState}
            setIsCheckedBox={setIsCheckedBox}
            showModalUserAgreement={showModalUserAgreement}
            showModalPersonalData={showModalPersonalData}
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
        onCancel={handleCancelUserAgreement}
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
        <h1>
          Тут будет тест соглашения c Политикой обработки персональных данных
        </h1>
      </Modal>
    </div>
  );
};
