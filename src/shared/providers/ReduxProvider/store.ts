/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from '@src/entities/User/model/slice/userSlice';
import { createReducerManager } from './reducerManager';
import { $api } from '@src/shared/api/api';

const rootReducers: ReducersMapObject<StateSchema> = {
  user: userReducer,
};

const reducerManager = createReducerManager(rootReducers);

export const store = configureStore({
  // @ts-ignore
  reducer: reducerManager.reduce as any,
  devTools: true,
  middleware: (getDefaultMiddleware): any =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
        },
      },
    }),
});

// @ts-ignore
store.reducerManager = reducerManager as any;

export type RootState = ReturnType<typeof store.getState>;
