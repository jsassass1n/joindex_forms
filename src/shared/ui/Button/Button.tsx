import { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './Button.styles';
import { CombinedCommonStyles } from '@src/shared/helpers/styled-component/getMarginsFromProps';
import { Loader } from '../Loader/Loader';

export enum ButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
  WARNING = 'warning',
  SUCCESS = 'success',
  DEFAULT = 'default',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>, CombinedCommonStyles {
  children: ReactNode;
  variant?: ButtonTheme;
  isLoading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { children, variant = ButtonTheme.DEFAULT, isLoading, ...otherProps } = props;
  return (
    <>
      <StyledButton variant={variant} {...otherProps}>
        {isLoading && <Loader />}
        {!isLoading && children}
      </StyledButton>
    </>
  );
};
