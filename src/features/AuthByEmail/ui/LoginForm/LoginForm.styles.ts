import styled from 'styled-components';

export const LoginFormCard = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
  box-shadow: 5px 5px 75px -45px rgba(0, 0, 0, 0.64);

  padding: 30px 30px;
  border-radius: 15px;
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
