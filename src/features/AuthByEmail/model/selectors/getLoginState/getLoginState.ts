import { StateSchema } from '@src/shared/providers/ReduxProvider/StateSchema';

export const getLoginState = (state: StateSchema) => state.loginForm;
