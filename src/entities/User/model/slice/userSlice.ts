import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/UserSchema';
import { LOCAL_STORAGE_ACTIVE_TOKEN } from '@src/shared/config/constants';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(LOCAL_STORAGE_ACTIVE_TOKEN);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logOut: (state) => {
      state.authData = undefined;
      localStorage.removeItem(LOCAL_STORAGE_ACTIVE_TOKEN);
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
