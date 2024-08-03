import { FormHTMLAttributes, ReactNode } from 'react';
import { StyledCard } from './Card.styles';

interface CardProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export const Card = (props: CardProps) => {
  const { children, ...otherProps } = props;
  return <StyledCard {...otherProps}>{children}</StyledCard>;
};
