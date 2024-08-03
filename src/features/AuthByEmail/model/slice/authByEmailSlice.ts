import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema, RegisterSchema } from '../types/authByEmailSchema';
import { loginByEmail } from '../services/loginByEmail';

const loginInitialState: LoginSchema = {
  isLoading: false,
  email: '',
  password: '',
  error: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState: loginInitialState,
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

export interface SetFormValuePayload {
  name: keyof RegisterSchema['form'];
  value: string;
}

export interface SetFormBlurPayload {
  name: keyof RegisterSchema['form'];
  value: boolean;
}

export const registerInitialState: RegisterSchema = {
  isLoading: false,
  form: {
    email: {
      value: '',
      error: '',
      blured: false,
      focused: false,
    },
    name: {
      value: '',
      error: '',
      blured: false,
      focused: false,
    },
    surname: {
      value: '',
      error: '',
      blured: false,
      focused: false,
    },
    password: {
      value: '',
      error: '',
      blured: false,
      focused: false,
    },
    password2: {
      value: '',
      error: '',
      blured: false,
      focused: false,
    },
  },
  error: '',
};

export const registerSlice = createSlice({
  name: 'register',
  initialState: registerInitialState,
  reducers: {
    setFormValue: (state, action: PayloadAction<SetFormValuePayload>) => {
      state.form[action.payload.name]['value'] = action.payload.value;
    },
    setFormBlur: (state, action: PayloadAction<SetFormBlurPayload>) => {
      state.form[action.payload.name]['blured'] = action.payload.value;
    },
    setFormFocus: (state, action: PayloadAction<SetFormBlurPayload>) => {
      state.form[action.payload.name]['focused'] = action.payload.value;
    },
    setFormError: (state, action: PayloadAction<SetFormValuePayload>) => {
      state.form[action.payload.name]['error'] = action.payload.value;
    },
  },
  extraReducers() {
    // builder.addCase(loginByEmail.fulfilled, (state) => {
    //   state.error = undefined;
    //   state.isLoading = false;
    // });
    // builder.addCase(loginByEmail.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = undefined;
    // });
    // builder.addCase(loginByEmail.rejected, (state, action) => {
    //   state.error = action.payload;
    //   state.isLoading = false;
    // });
  },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
export const { actions: registerActions, reducer: registerReducer } = registerSlice;
