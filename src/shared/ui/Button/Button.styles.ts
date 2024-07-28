import styled from 'styled-components';
import { ButtonProps, ButtonTheme } from './Button';

export const StyledButton = styled.button<ButtonProps>`
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  letter-spacing: 1px;
  border: none;
  border-radius: 10px;
  padding: 12px 18px;
  cursor: pointer;

  ${(props) =>
    props.variant === ButtonTheme.PRIMARY &&
    `
    background-color: ${props.theme.colors.primary};
    color: ${props.theme.colors.white}
    `}
  ${(props) =>
    props.variant === ButtonTheme.DEFAULT &&
    `
  color: ${props.theme.colors.primary};
  background-color: transparent;
  `}
  ${(props) =>
    props.variant === ButtonTheme.DANGER &&
    `
    background-color: ${props.theme.colors.red};
    color: ${props.theme.colors.white}
    `}
  ${(props) =>
    props.variant === ButtonTheme.SECONDARY && `background-color: ${props.theme.colors.gray};`}

  ${(props) =>
    props.variant === ButtonTheme.SUCCESS &&
    `
    background-color: ${props.theme.colors.green};
    color: ${props.theme.colors.white}
    `}
    
  ${(props) =>
    props.variant === ButtonTheme.WARNING &&
    `
    background-color: ${props.theme.colors.orange};
    color: ${props.theme.colors.white}
    `}
`;
