import { ChangeEvent, useState, useEffect } from "react"
import imgLoginPage from "../../assets/image/loginpage.png"
import gplay from "../../assets/image/gplay.png"
import appstr from "../../assets/image/appstr.png"
import { ReloadOutlined, EyeOutlined } from '@ant-design/icons';
import { Input, Modal, Checkbox } from 'antd';
import Timer from '../../components/Timer/Timer';
import MaskedInput from 'antd-mask-input'
import checked from "../../assets/image/checked.svg"
import './LoginPage.css'


const LoginPage = () => {

	const [phoneValue, setPhoneValue] = useState('')
	const [passValue, setPassValue] = useState('')
	const [requestPassword, setRequestPassword] = useState(true)
	const [isCheckedBox, setIsCheckedBox] = useState(false)
	const [isUserAgreementVisible, setIsUserAgreementVisible] = useState(false);
	const [isPersonalDataVisible, setIsPersonalDataVisible] = useState(false);


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

	let backgroundCheckBox = 'transparent';

	if (isCheckedBox === true) {
		backgroundCheckBox = `url(${checked})`
	}

	const handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setPhoneValue(value)
	}

	const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setPassValue(value)
	}
	function checkLengthPhone(value: string) {
		let result = value.slice(1).replace(/\s/g, "").replace(/\_/g, "");
		return result.length
	}

	return (
		<div className="auth-layout">
			<div className="auth-container">
				<img src={imgLoginPage} />
				<h1>Вход в личный кабинет</h1>
				{
					requestPassword
						?
						<>
							<div className="auth-wrapper">
								<MaskedInput
									name="phone"
									mask="+7 111 111 11 11"
									placeholder="Номер телефона"
									onChange={handlePhoneNumber} value={phoneValue}
								/>
								<button
									disabled={checkLengthPhone(phoneValue) === 11 ? false : true}
									onClick={() => setRequestPassword(false)}
								>Далее</button>
							</div>
							<button className="auth-try-demo">Демо -режим</button>
							<div className="auth-play-stores">
								<div>
									<img src={gplay} />
								</div>
								<div>
									<img src={appstr} />
								</div>
							</div>
						</>
						:
						<>
							<p className="auth-instruction">Пожалуйста, введите одноразовый пароль  отправленный на номер {phoneValue}</p>
							<button className="auth-back-to-start"
								onClick={() => setRequestPassword(true)}
							>
								<ReloadOutlined className="start-small-icon" /> Поменять номер</button>
							<div className="auth-wrapper">
								<Input maxLength={4} suffix={<EyeOutlined />} placeholder='Одноразовый пароль' onChange={handlePassword} value={passValue} />

								<Timer />

								<button
									disabled={!isCheckedBox}
									onClick={() => alert('Клик по кнопке войти')}
								>Войти</button>
							</div>
							<div className="auth-check-box-wrapp">
								<div className="auth-check-box"
									style={{ background: backgroundCheckBox }}
								>
									<Checkbox checked={isCheckedBox} onChange={() => setIsCheckedBox(!isCheckedBox)} disabled={passValue.length === 4 ? false : true} />
								</div>
								<p>Вы соглашаетесь с правилами <span className="polit-agree" onClick={() => showModalUserAgreement()}>Пользовательского соглашения </span> и <span className="polit-agree" onClick={() => showModalPersonalData()}>Политикой обработки персональных данных</span>.</p>
							</div>
							<button className="retry-send">Повторить отправку одноразового пароля</button>
						</>
				}
				<div className="auth-line-under-button"></div>
				<button className="auth-support-link">Служба поддержки</button>
			</div>

			<Modal footer={null} width={1000} title="Пользовательское соглашение" visible={isUserAgreementVisible} onCancel={handleCancelUserAgreement}>
				<h1>Тут будет тест Пользовательского соглашения</h1>
			</Modal>
			<Modal footer={null} width={1000} title="Политика обработки персональных данных" visible={isPersonalDataVisible} onCancel={handleCancelPersonalData}>
				<h1>Тут будет тест соглашения c Политикой обработки персональных данных</h1>
			</Modal>
		</div>
	)
};

export default LoginPage;