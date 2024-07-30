import { Input } from '@src/shared/ui/Input/Input';
import { FormErrorText, LoginFormCard, LoginFromBottomText } from './LoginForm.styles';
import { Button, ButtonTheme } from '@src/shared/ui/Button/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { loginActions } from '../../model/slice/authByEmailSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByEmail } from '../../model/services/loginByEmail';
import { useAppDispatch } from '@src/shared/providers/ReduxProvider/hooks/hooks';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { email, password, isLoading, error } = useSelector(getLoginState);

  const handleEmailChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setEmail(value));
    },
    [dispatch]
  );

  const handlePasswordChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const handleLoginSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(loginByEmail({ email, password }));
    },
    [email, password, dispatch]
  );

  const isbuttonDisabled = !email.length || !password.length || isLoading;

  return (
    <LoginFormCard onSubmit={handleLoginSubmit}>
      <h2>Login</h2>

      <Input
        autoFocus
        value={email}
        onChange={handleEmailChange}
        label="Электронная почта"
        mt="20px"
        blurError="Электронная почта не может быть пустым"
        placeholder="example@gmail.com"
      />
      <Input
        value={password}
        onChange={handlePasswordChange}
        type="password"
        label="Пароль"
        mt="17px"
        blurError="Пароль не может быть пустым"
        placeholder="**********"
      />
      {error && <FormErrorText>{error}</FormErrorText>}
      <Button
        variant={ButtonTheme.PRIMARY}
        disabled={isbuttonDisabled}
        type="submit"
        mt={error ? '10px' : '20px'}
        isLoading={isLoading}
      >
        Войти
      </Button>
      <LoginFromBottomText>
        Нет аккаунта? <Link to={'/register'}>Зарегистрироваться</Link>
      </LoginFromBottomText>
    </LoginFormCard>
  );
};
