import { RegisterForm } from '@src/features/AuthByEmail/ui/RegisterForm/RegisterForm';
import { RegisterPageWrapper } from './RegisterPage.styles';
import { DynamicModuleLoader } from '@src/shared/helpers/DynamicModuleLoader/DynamicModuleLoader';
import { registerReducer } from '@src/features/AuthByEmail/model/slice/authByEmailSlice';

export const RegisterPage = () => {
  return (
    <DynamicModuleLoader name="registerForm" reducer={registerReducer}>
      <RegisterPageWrapper>
        <RegisterForm />
      </RegisterPageWrapper>
    </DynamicModuleLoader>
  );
};
