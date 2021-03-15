export type TFormInputPhoneProps = {
  phoneValue: ((string | number | readonly string[]) & string) | undefined;
  onChangePhone: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlerSendPhone: () => void;
  phoneLengthIsValid: boolean;
  loading: boolean;
};
