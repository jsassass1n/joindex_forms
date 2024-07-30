import { StateSchema } from '@src/shared/providers/ReduxProvider/StateSchema';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
