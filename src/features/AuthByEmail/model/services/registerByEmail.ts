import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from '@src/entities/User/model/slice/userSlice';
import { User } from '@src/entities/User/model/types/UserSchema';
import { LOCAL_STORAGE_ACTIVE_TOKEN } from '@src/shared/config/constants';
import axios from 'axios';

export interface RegisterByEmailProps {
  email: string;
  password: string;
}

export const registerByEmail = createAsyncThunk<
  User,
  RegisterByEmailProps,
  { rejectValue: string }
>('register/registerByEmail', async (authData, thunkApi) => {
  try {
    const response = await axios.post<User>('http://localhost:8000/register', authData);

    if (!response.data) {
      throw new Error('Пользователь не найден');
    }
    localStorage.setItem(LOCAL_STORAGE_ACTIVE_TOKEN, JSON.stringify(response.data));
    thunkApi.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue('Произошла ошибка');
  }
});
