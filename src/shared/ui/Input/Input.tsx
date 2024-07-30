import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';
import { InputWrapper, StyledError, StyledInput, StyledLabel } from './Input.styles';
import {
  CombinedCommonStyles,
  getMarginsFromProps,
} from '@src/shared/helpers/styled-component/getMarginsFromProps';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;

export interface InputProps extends HtmlInputProps, CombinedCommonStyles {
  label?: string;
  error?: string;
  blurError?: string;
  onChange: (value: string) => void;
  value: string;
}

export const Input: FC<InputProps> = (props) => {
  const [blured, setBlured] = useState<boolean>(false);
  const marginProps = getMarginsFromProps(props);
  const { label, id, error, blurError, value, onChange, ...otherProps } = props;

  const handleBlur = () => {
    setBlured(true);
  };

  const handleFocus = () => {
    setBlured(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
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
        {...otherProps}
      />
      {!error && blured && !value && <StyledError>{blurError}</StyledError>}
      {error && <StyledError>{error}</StyledError>}
    </InputWrapper>
  );
};
