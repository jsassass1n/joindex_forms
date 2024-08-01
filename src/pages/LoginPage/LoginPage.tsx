import { LoginForm } from '@src/features/AuthByEmail/ui/LoginForm/LoginForm';
import { LoginPageWrapper } from './LoginPage.styles';
import { DynamicModuleLoader } from '@src/shared/helpers/DynamicModuleLoader/DynamicModuleLoader';
import { loginReducer } from '@src/features/AuthByEmail/model/slice/authByEmailSlice';

const LoginPage = () => {
  return (
    <DynamicModuleLoader name="loginForm" reducer={loginReducer}>
      <LoginPageWrapper>
        <LoginForm />
      </LoginPageWrapper>
    </DynamicModuleLoader>
  );
};

export default LoginPage;
