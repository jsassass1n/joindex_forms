import styled from 'styled-components';
import { InputProps } from './Input';
import { commonStyles } from '@src/shared/helpers/styled-component/common.styles';

interface StyledInputProps extends InputProps {
  $blured: boolean;
}

export const InputWrapper = styled.div<
  Omit<InputProps, 'onChange' | 'value' | 'onBlur' | 'onFocus' | 'onError' | 'label'>
>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${commonStyles};
`;

export const StyledInput = styled.input<
  Omit<StyledInputProps, 'onChange' | 'onBlur' | 'onFocus' | 'onError' | 'label'>
>`
  border: ${(props) => `1px solid ${props.theme.colors.inputBorder}`};
  background-color: ${(props) => props.theme.colors.invertedPrimary};
  outline: none;
  padding: 10px;
  border-radius: 10px;
  transition: 0.3s;
  color: ${(props) => props.theme.colors.primary};
  border-color: ${(props) => props.theme.colors.inputBorderColor};
  &:focus {
    border-color: ${(props) => props.theme.colors.blue};
  }

  ${({ error, value, ...props }) =>
    ((!error && props.$blured && !value) || error) && `border-color: ${props.theme.colors.red}`};
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
`;

export const StyledError = styled.p`
  color: ${(props) => props.theme.colors.red};
  font-size: 13px;
  margin-top: 5px;
`;
