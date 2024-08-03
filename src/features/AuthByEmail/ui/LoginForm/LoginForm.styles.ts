import { StyledCard } from '@src/shared/ui/Card/Card.styles';
import styled from 'styled-components';

export const LoginFormCard = styled(StyledCard)`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
`;

export const LoginFromBottomText = styled.p`
  font-size: 14px;
  margin-top: 12px;
`;

export const FormErrorText = styled.p`
  font-size: 13px;
  margin-top: 7px;
  color: ${(props) => props.theme.colors.red};
`;
