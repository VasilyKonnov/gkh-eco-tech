export type TGetAuthPassFormimport = {
	phoneValue: ((string | number | readonly string[]) & string) | undefined,
	handlePhoneNumber: React.ChangeEventHandler<HTMLInputElement>,
	setRequestPassword: Function,
	checkLengthPhone: Function
}