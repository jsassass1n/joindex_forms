import { Card } from '@src/shared/ui/Card/Card';
import styled from 'styled-components';

export const RegisterFormCard = styled(Card)``;

export const FormErrorText = styled.p`
  font-size: 13px;
  margin-top: 7px;
  color: ${(props) => props.theme.colors.red};
`;

export const RegisterFormBottomText = styled.p`
  font-size: 14px;
  margin-top: 12px;
`;
