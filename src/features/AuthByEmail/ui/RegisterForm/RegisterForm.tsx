import { Input } from '@src/shared/ui/Input/Input';
import { FormErrorText, RegisterFormBottomText, RegisterFormCard } from './RegisterForm.styles';
import { Button, ButtonTheme } from '@src/shared/ui/Button/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { registerActions, SetFormValuePayload } from '../../model/slice/authByEmailSlice';
import { useAppDispatch } from '@src/shared/providers/ReduxProvider/hooks/hooks';
import { getRegisterState } from '../../model/selectors/getRegisterState/getRegisterState';
import { AppRoutes } from '@src/shared/config/routesPath';

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const { form, isLoading, error } = useSelector(getRegisterState);
  const { email, name, password, password2, surname } = form;

  const handleFormChange = useCallback(
    (name: string, value: string) => {
      dispatch(
        registerActions.setFormValue({
          name: name as SetFormValuePayload['name'],
          value,
        })
      );
    },
    [dispatch]
  );

  const handleFormBlur = useCallback(
    (name: string, value: string, label: string) => {
      dispatch(
        registerActions.setFormBlur({
          name: name as SetFormValuePayload['name'],
          value: true,
        })
      );
      if (value.trim().length === 0) {
        dispatch(
          registerActions.setFormError({
            name: name as SetFormValuePayload['name'],
            value: `${label} не может быть пустым`,
          })
        );
      } else {
        dispatch(
          registerActions.setFormError({
            name: name as SetFormValuePayload['name'],
            value: '',
          })
        );
      }
    },
    [dispatch]
  );

  const handleFormFocus = useCallback(
    (name: string) => {
      dispatch(
        registerActions.setFormFocus({
          name: name as SetFormValuePayload['name'],
          value: true,
        })
      );
    },
    [dispatch]
  );

  const handleRegisterSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  useEffect(() => {
    if (password.value !== password2.value && password.blured && password2.blured) {
      dispatch(
        registerActions.setFormError({
          name: 'password2' as SetFormValuePayload['name'],
          value: 'Пароли должны совпадать',
        })
      );
    }
    if (password.value === password2.value && password.value.length && password2.value.length) {
      dispatch(
        registerActions.setFormError({
          name: 'password2' as SetFormValuePayload['name'],
          value: '',
        })
      );
    }
  }, [password.value, password2.value, password2.blured, password.blured, dispatch]);

  const buttonDisabled =
    password.error.length ||
    password2.error.length ||
    name.error.length ||
    email.error.length ||
    surname.error.length ||
    !password.blured ||
    !password2.blured ||
    !name.blured ||
    !surname.blured ||
    !email.blured;

  return (
    <RegisterFormCard onSubmit={handleRegisterSubmit}>
      <h2>Register</h2>

      <Input
        autoFocus
        value={name.value}
        error={name.error}
        blured={name.blured}
        name="name"
        onChange={handleFormChange}
        onBlur={handleFormBlur}
        onFocus={handleFormFocus}
        label="Иия"
        mt="20px"
        placeholder="Сергей"
      />

      <Input
        value={surname.value}
        error={surname.error}
        blured={surname.blured}
        name="surname"
        onChange={handleFormChange}
        onBlur={handleFormBlur}
        onFocus={handleFormFocus}
        label="Фамилия"
        mt="20px"
        placeholder="Иванов"
      />

      <Input
        value={email.value}
        error={email.error}
        blured={email.blured}
        name="email"
        onChange={handleFormChange}
        onBlur={handleFormBlur}
        onFocus={handleFormFocus}
        label="Электронная почта"
        mt="20px"
        placeholder="example@gmail.com"
      />

      <Input
        value={password.value}
        error={password.error}
        blured={password.blured}
        name="password"
        onChange={handleFormChange}
        onBlur={handleFormBlur}
        onFocus={handleFormFocus}
        type="password"
        label="Пароль"
        mt="17px"
        placeholder="**********"
      />

      <Input
        value={password2.value}
        error={password2.error}
        blured={password2.blured}
        onChange={handleFormChange}
        onFocus={handleFormFocus}
        onBlur={handleFormBlur}
        type="password"
        name="password2"
        label="Повторный пароль"
        mt="17px"
        placeholder="**********"
      />
      {error && <FormErrorText>{error}</FormErrorText>}
      <Button
        variant={ButtonTheme.PRIMARY}
        type="submit"
        disabled={Boolean(buttonDisabled)}
        mt={error ? '10px' : '20px'}
        isLoading={isLoading}
      >
        Войти
      </Button>
      <RegisterFormBottomText>
        У вас уже есть аккаунт? <Link to={AppRoutes.login}>Войти</Link>
      </RegisterFormBottomText>
    </RegisterFormCard>
  );
};
