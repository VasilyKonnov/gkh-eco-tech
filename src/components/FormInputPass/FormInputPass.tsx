import { FC } from 'react';
import { EyeOutlined } from '@ant-design/icons';
import { Input, Checkbox, Button, Typography } from 'antd';
import { Timer } from '../Timer';
import { FetchingStateTypes } from '../../store';
import { TFormInputPassProps } from './FormInputPassTypes';

const { Text } = Typography;

export const FormInputPass: FC<TFormInputPassProps> = ({
  setRequestPassword,
  handlePassword,
  passValue,
  phoneValue,
  isCheckedBox,
  handleLogin,
  fetchingState,
  setIsCheckedBox,
  showModalUserAgreement,
  showModalPersonalData,
  canAgree,
}) => (
  <>
    <Text className="auth-instruction">
      Пожалуйста, введите одноразовый пароль отправленный на номер {phoneValue}
    </Text>
    <button
      className="auth-back-to-start"
      onClick={() => setRequestPassword(true)}
    >
      Поменять номер
    </button>
    <div className="auth-wrapper">
      <form>
        <Input
          maxLength={6}
          suffix={<EyeOutlined />}
          placeholder="Одноразовый пароль"
          onChange={handlePassword}
          value={passValue}
        />
        <Timer />
        <Button
          disabled={!isCheckedBox}
          onClick={handleLogin}
          loading={fetchingState === FetchingStateTypes.loading}
          // htmlType="submit"
        >
          Войти
        </Button>
      </form>
    </div>
    <div className="auth-check-box-wrapp">
      <div className="auth-check-box">
        <Checkbox
          checked={isCheckedBox}
          onChange={() => setIsCheckedBox(!isCheckedBox)}
          disabled={canAgree}
        />
      </div>
      <Text>
        Вы соглашаетесь с правилами{' '}
        <span className="polit-agree" onClick={() => showModalUserAgreement()}>
          Пользовательского соглашения{' '}
        </span>{' '}
        и{' '}
        <span className="polit-agree" onClick={() => showModalPersonalData()}>
          Политикой обработки персональных данных
        </span>
        .
      </Text>
    </div>
  </>
);
