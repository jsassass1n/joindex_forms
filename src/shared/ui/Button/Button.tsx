import { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './Button.styles';

export enum ButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
  WARNING = 'warning',
  SUCCESS = 'success',
  DEFAULT = 'default',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: ButtonTheme;
}

export const Button = (props: ButtonProps) => {
  const { children, variant = ButtonTheme.DEFAULT, ...otherProps } = props;
  return (
    <>
      <StyledButton variant={variant} {...otherProps}>
        {children}
      </StyledButton>
    </>
  );
};
