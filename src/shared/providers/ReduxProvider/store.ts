/* eslint-disable @typescript-eslint/ban-ts-comment */
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from '@src/entities/User/model/slice/userSlice';
import { createReducerManager } from './reducerManager';

const rootReducers: ReducersMapObject<StateSchema> = {
  user: userReducer,
};

const reducerManager = createReducerManager(rootReducers);

export const store = configureStore<StateSchema>({
  // @ts-ignore
  reducer: reducerManager.reduce,
  devTools: true,
});

// @ts-ignore
store.reducerManager = reducerManager;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
