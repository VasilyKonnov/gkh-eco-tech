export type TFormInputPhoneProps = {
	phoneValue: ((string | number | readonly string[]) & string) | undefined,
	handlerPhoneNumber: React.ChangeEventHandler<HTMLInputElement>,
	handlerRequestPasswor: React.MouseEventHandler<HTMLButtonElement>,
	checkLengthPhone: Function
}