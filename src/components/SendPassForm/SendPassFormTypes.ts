import { ReactNode } from "react";

export type TSendPassForm = {
	passValue: string | number | undefined,
	phoneValue: string | number | undefined,
	// phoneValue: ((string | number | readonly string[]) & string) | undefined,
	handlePassword: React.ChangeEventHandler<HTMLInputElement>,
	setRequestPassword: Function,
	isCheckedBox: boolean,
	handleLogin: React.MouseEventHandler<HTMLElement>,
	showModalUserAgreement: Function,
	showModalPersonalData: Function,
	fetchingState: string,
	setIsCheckedBox: Function,
}