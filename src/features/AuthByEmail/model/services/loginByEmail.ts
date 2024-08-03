/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from '@src/entities/User/model/slice/userSlice';
import { User } from '@src/entities/User/model/types/UserSchema';
import { LOCAL_STORAGE_ACTIVE_TOKEN } from '@src/shared/config/constants';

export interface LoginByEmailProps {
  email: string;
  password: string;
}

export const loginByEmail = createAsyncThunk<User, LoginByEmailProps, { rejectValue: string }>(
  'login/loginByEmail',
  async (authData, thunkApi: any) => {
    try {
      const response = await thunkApi.extra.api.post('/login', authData);

      if (!response.data) {
        throw new Error('Пользователь не найден');
      }
      localStorage.setItem(LOCAL_STORAGE_ACTIVE_TOKEN, JSON.stringify(response.data));
      thunkApi.dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue('Вы ввели неверный логин или пароль');
    }
  }
);
