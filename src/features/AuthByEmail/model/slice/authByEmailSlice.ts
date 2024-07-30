import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginByEmail } from '../services/loginByEmail';

const initialState: LoginSchema = {
  isLoading: false,
  email: '',
  password: '',
  error: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(loginByEmail.fulfilled, (state) => {
      state.error = undefined;
      state.isLoading = false;
    });
    builder.addCase(loginByEmail.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(loginByEmail.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
