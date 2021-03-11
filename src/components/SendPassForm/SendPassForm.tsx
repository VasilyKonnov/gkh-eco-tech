import { FC } from "react";
import { EyeOutlined } from '@ant-design/icons';
import { Input, Checkbox, Button, Typography, } from 'antd';

import Timer from '../Timer/Timer';
import { FetchingStateTypes } from '../../store';
import { TSendPassForm } from "./SendPassFormTypes";

export const SendPassForm: FC<TSendPassForm> = ({
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
}) => {

	const { Text } = Typography;

	return <>
		<Text className="auth-instruction">Пожалуйста, введите одноразовый пароль  отправленный на номер {phoneValue}</Text>
		<button className="auth-back-to-start"
			onClick={() => setRequestPassword(true)}
		>Поменять номер</button>
		<div className="auth-wrapper">
			<form>
				<Input maxLength={4} suffix={<EyeOutlined />} placeholder='Одноразовый пароль' onChange={handlePassword} value={passValue} />

				<Timer />

				<Button
					disabled={!isCheckedBox}
					onClick={handleLogin}
					loading={fetchingState === FetchingStateTypes.loading}
					htmlType="submit"
				>Войти</Button>
			</form>
		</div>
		<div className="auth-check-box-wrapp">
			<div className="auth-check-box">
				{/* @ts-ignore */}
				<Checkbox checked={isCheckedBox} onChange={() => setIsCheckedBox(!isCheckedBox)} disabled={passValue.length === 4 ? false : true} />
			</div>
			<Text>Вы соглашаетесь с правилами <span className="polit-agree" onClick={() => showModalUserAgreement()}>Пользовательского соглашения </span> и <span className="polit-agree" onClick={() => showModalPersonalData()}>Политикой обработки персональных данных</span>.</Text>
		</div>
	</>
}

