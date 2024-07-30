import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { loginReducer } from '@src/features/AuthByEmail/model/slice/authByEmailSlice';
import { userReducer } from '@src/entities/User/model/slice/userSlice';

export const store = configureStore<StateSchema>({
  reducer: {
    loginForm: loginReducer,
    user: userReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
