import { StateSchema } from '@src/shared/providers/ReduxProvider/StateSchema';
import { registerInitialState } from '../../slice/authByEmailSlice';

export const getRegisterState = (state: StateSchema) => state?.registerForm ?? registerInitialState;
