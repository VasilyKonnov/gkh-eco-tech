import { FC } from 'react';
import { EyeOutlined } from '@ant-design/icons';
import { Input, Checkbox, Button, Typography } from 'antd';
import { Timer } from '../Timer';
import { FetchingStateTypes } from '../../store';
import { TFormInputPassProps } from './FormInputPassTypes';

const { Text } = Typography;

export const FormInputPass: FC<TFormInputPassProps> = ({
  changePhone,
  handlerPassword,
  passValue,
  phoneValue,
  isCheckedBox,
  handlerLogin,
  fetchingState,
  handlerCheckedBox,
  showModalUserAgreementCallback,
  showModalPersonalDataCallback,
  canAgree,
}) => (
  <>
    <Text className="auth-instruction">
      Пожалуйста, введите одноразовый пароль отправленный на номер {phoneValue}
    </Text>
    <button className="auth-back-to-start" onClick={changePhone}>
      Поменять номер
    </button>
    <div className="auth-wrapper">
      <form>
        <Input
          maxLength={6}
          suffix={<EyeOutlined />}
          placeholder="Одноразовый пароль"
          onChange={handlerPassword}
          value={passValue}
        />
        <Timer />
        <Button
          disabled={!isCheckedBox}
          onClick={handlerLogin}
          loading={fetchingState === FetchingStateTypes.loading}
          // htmlType="submit"
        >
          Войти
        </Button>
      </form>
    </div>
    <div className="auth-check-box-wrapp">
      <div className="auth-check-box">
        <Checkbox onChange={handlerCheckedBox} checked={isCheckedBox} disabled={canAgree} />
      </div>
      <Text>
        Вы соглашаетесь с правилами{' '}
        <span className="polit-agree" onClick={showModalUserAgreementCallback}>
          Пользовательского соглашения{' '}
        </span>{' '}
        и{' '}
        <span className="polit-agree" onClick={showModalPersonalDataCallback}>
          Политикой обработки персональных данных
        </span>
        .
      </Text>
    </div>
  </>
);
