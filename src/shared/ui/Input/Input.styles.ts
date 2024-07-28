import styled from 'styled-components';
import { InputProps } from './Input';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input<Omit<InputProps, 'label'>>`
  border: ${(props) => `1px solid ${props.theme.colors.inputBorder}`};

  outline: none;
  padding: 10px;
  border-radius: 10px;
  transition: 0.3s;

  &:focus {
    border-color: ${(props) => props.theme.colors.blue};
  }

  ${(props) => props.error && `border-color: ${props.theme.colors.red}`}
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
