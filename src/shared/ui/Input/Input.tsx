import { FC, InputHTMLAttributes } from 'react';
import { InputWrapper, StyledError, StyledInput, StyledLabel } from './Input.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string;
}

export const Input: FC<InputProps> = (props) => {
  const { label, id, error, ...otherProps } = props;
  return (
    <InputWrapper>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput id={id} error={error} {...otherProps} />
      {error && <StyledError>{error}</StyledError>}
    </InputWrapper>
  );
};
