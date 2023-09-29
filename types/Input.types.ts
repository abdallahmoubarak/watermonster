type InputProps = {
  placeholder: string;
  value: string | number;
  setValue?: Function;
  inputType?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  accept?: string;
  isDisabled?: boolean;
  refprop?: React.Ref<HTMLInputElement>;
  limit?: number;
};
