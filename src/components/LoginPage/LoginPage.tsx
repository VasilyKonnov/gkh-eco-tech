import { useState } from "react"
import './LoginPage.css'
import imgLoginPage from "../../assets/image/loginpage.jpg"
import gplay from "../../assets/image/gplay.png"
import appstr from "../../assets/image/appstr.png"
import arrowleft from "../../assets/image/arrowleft.svg"
import { Input, Modal } from 'antd';
import checked from "../../assets/image/checked.svg"


const LoginPage = (props: any) => {

	const [phoneValue, setPhoneValue] = useState('')
	const [passValue, setPassValue] = useState('')
	const [requestPassword, setRequestPassword] = useState(true)
	const [isCheckedBox, setIsCheckedBox] = useState(false)
	const [isUserAgreementVisible, setIsUserAgreementVisible] = useState(false);
	const [isPersonalDataVisible, setIsPersonalDataVisible] = useState(false);

	const showModalUserAgreement = () => {
		setIsUserAgreementVisible(true);
		console.log("Был вызов isUserAgreementVisible - ", isUserAgreementVisible);

	};
	const handleCancelUserAgreement = () => {
		setIsUserAgreementVisible(false);
	};

	const showModalPersonalData = () => {
		setIsPersonalDataVisible(true);
		console.log("Был вызов isPersonalDataVisible - ", isPersonalDataVisible);
	};
	const handleCancelPersonalData = () => {
		setIsPersonalDataVisible(false);
	};

	let backgroundCheckBox = 'transparent';

	if (isCheckedBox === true) {
		backgroundCheckBox = `url(${checked})`
	}

	const handlePhoneNumber = (event: any) => {
		const value = event.target.value;
		setPhoneValue(value)
	}

	const handlePassword = (event: any) => {
		const value = event.target.value;
		setPassValue(value)
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
								<span>Номер телефона</span>
								<Input onChange={handlePhoneNumber} value={phoneValue} />
								<button
									disabled={phoneValue.length ? false : true}
									onClick={() => setRequestPassword(false)}
								>Далее</button>
							</div>
							<button className="auth-try-demo">Попробовать деморежим</button>
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
							<button className="auth-back-to-start"
								onClick={() => setRequestPassword(true)}
							>
								<img src={arrowleft} /> Поменять номер</button>
							<p className="auth-instruction">На указанный номер телефона отправлено сообщение. Пожалуйста, введите одноразовый пароль ниже для авторизации.</p>
							<div className="auth-wrapper">
								<span>Одноразовый пароль</span>
								<Input onChange={handlePassword} value={passValue} />
								<button
									disabled={!isCheckedBox}
									onClick={() => alert('Клик по кнопке войти')}
								>Войти</button>
							</div>
							<div className="auth-check-box-wrapp">
								{/* Пока не настроили получение ответа от бэкэнда отображаю чекбокс по наличию данных в input */}
								{passValue.length
									?
									<div className="auth-check-box"
										style={{ background: backgroundCheckBox }}
									>
										<label
											htmlFor="auth-checkbox"
										>
											<input checked={isCheckedBox} onChange={() => setIsCheckedBox(!isCheckedBox)} type="checkbox" id="auth-checkbox" />
										</label>
									</div>
									:
									null
								}
								<p>Вы соглашаетесь с правилами <span className="polit-agree" onClick={() => showModalUserAgreement()}>Пользовательского соглашения </span> и <span className="polit-agree" onClick={() => showModalPersonalData()}>Политикой обработки персональных данных</span>.</p>
							</div>
							<button className="retry-send">Повторить отправку одноразового пароля</button>
						</>
				}
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