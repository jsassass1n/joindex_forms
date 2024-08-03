import axios from 'axios';
// import { Dispatch } from '@reduxjs/toolkit';
// import { StateSchema } from '@src/shared/providers/ReduxProvider/StateSchema';

jest.mock('axios');

const mockAxios = jest.mocked(axios);

describe('loginByEmail.test', () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  beforeEach(() => {
    // dispatch = jest.fn();
    // getState = jest.fn();
  });

  test('Success test', async () => {
    const userValue = { email: 'test@gmail.com', id: '1' };
    mockAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    // const action = loginByEmail({ email: 'test@gmail.com', password: 'test' });

    // const result = await action(dispatch, getState, undefined);

    // expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    // expect(mockAxios.post).toHaveBeenCalled();
    // expect(result.meta.requestStatus).toBe('fulfilled');
  });
});
