import { CheckboxChangeEvent } from "antd/lib/checkbox";

export type TFormInputPassProps = {
  passValue: string | number | undefined;
  phoneValue: string | number | undefined;
  handlerPassword: React.ChangeEventHandler<HTMLInputElement>;
  changePhone: React.MouseEventHandler<HTMLButtonElement>;
  isCheckedBox: boolean;
  handlerLogin: React.MouseEventHandler<HTMLElement>;
  showModalUserAgreementCallback: React.MouseEventHandler<HTMLSpanElement>;
  showModalPersonalDataCallback: React.MouseEventHandler<HTMLSpanElement>;
  fetchingState: string;
  handlerCheckedBox: (e: CheckboxChangeEvent) => void;
  canAgree: boolean;
};
