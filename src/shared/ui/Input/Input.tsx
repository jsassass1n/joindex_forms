import { ChangeEvent, FC, FocusEvent, InputHTMLAttributes } from 'react';
import { InputWrapper, StyledError, StyledInput, StyledLabel } from './Input.styles';
import {
  CombinedCommonStyles,
  getMarginsFromProps,
} from '@src/shared/helpers/styled-component/getMarginsFromProps';

type HtmlInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'onBlur' | 'onFocus' | 'onError' | 'label'
>;

export interface InputProps extends HtmlInputProps, CombinedCommonStyles {
  label: string;
  error?: string;
  onChange: (name: string, value: string) => void;
  onBlur?: (name: string, value: string, label: string) => void;
  onFocus?: (name: string) => void;
  value: string;
  customError?: string;
  blured?: boolean;
  focused?: boolean;
}

export const Input: FC<InputProps> = (props) => {
  const marginProps = getMarginsFromProps(props);
  const {
    label,
    id,
    error,
    blured = false,
    onBlur,
    onFocus,
    value,
    name,
    onChange,
    ...otherProps
  } = props;

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e.target.name, e.target.value, label);
    }
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (onFocus) {
      onFocus(e.target.name);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <InputWrapper {...marginProps}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        id={id}
        value={value}
        error={error}
        $blured={blured}
        name={name}
        {...otherProps}
      />
      {error && <StyledError>{error}</StyledError>}
    </InputWrapper>
  );
};
