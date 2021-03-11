import { ChangeEvent, useState, useEffect, FC } from "react"
import { Input, Modal, Checkbox, Button, Typography } from 'antd';
import MaskedInput from 'antd-mask-input';
import { TGetAuthPassFormimport } from "./GetAuthPassFormTypes"

export const GetAuthPassForm: FC<TGetAuthPassFormimport> = ({
	phoneValue,
	setRequestPassword,
	handlePhoneNumber,
	checkLengthPhone
}) => {

	return <>
		<div className="auth-wrapper">
			<form>
				<MaskedInput
					type="tel"
					name="phone"
					mask="+7 111 111 11 11"
					placeholder="Номер телефона"
					onChange={handlePhoneNumber}
					value={phoneValue}
				/>
				<Button
					disabled={checkLengthPhone() ? false : true}
					onClick={() => setRequestPassword(false)}
				>Далее</Button>
			</form>
		</div>
		<button className="auth-try-demo">Демо-режим</button>
	</>
}

