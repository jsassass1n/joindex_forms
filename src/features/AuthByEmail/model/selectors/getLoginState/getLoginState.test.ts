import { StateSchema } from '@src/shared/providers/ReduxProvider/StateSchema';
import { getLoginState } from './getLoginState';
import { DeepPartial } from '@src/shared/helpers/types';

describe('getLoginState.test', () => {
  test('should return login state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        email: 'test@gmai.com',
        error: 'error',
        isLoading: false,
        password: 'password',
      },
    };
    expect(getLoginState(state as StateSchema)).toHaveProperty('email', 'test@gmai.com');
    expect(getLoginState(state as StateSchema)).toHaveProperty('error', 'error');
    expect(getLoginState(state as StateSchema)).toHaveProperty('isLoading', false);
    expect(getLoginState(state as StateSchema)).toHaveProperty('password', 'password');
  });
});
