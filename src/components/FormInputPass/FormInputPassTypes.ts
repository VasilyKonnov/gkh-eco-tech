export type TFormInputPassProps = {
  passValue: string | number | undefined;
  phoneValue: string | number | undefined;
  handlePassword: React.ChangeEventHandler<HTMLInputElement>;
  setRequestPassword: Function;
  isCheckedBox: boolean;
  handleLogin: React.MouseEventHandler<HTMLElement>;
  showModalUserAgreement: Function;
  showModalPersonalData: Function;
  fetchingState: string;
  setIsCheckedBox: Function;
  canAgree: boolean;
};
