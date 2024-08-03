import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { UserSchema } from '@src/entities/User/model/types/UserSchema';
import {
  LoginSchema,
  RegisterSchema,
} from '@src/features/AuthByEmail/model/types/authByEmailSchema';

export interface StateSchema {
  user: UserSchema;

  // Async reducers
  loginForm?: LoginSchema;
  registerForm?: RegisterSchema;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => ReducersMapObject<StateSchema>;
  add: (key: keyof StateSchema, reducer: Reducer) => void;
  remove: (key: keyof StateSchema) => void;
}
