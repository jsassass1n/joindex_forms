/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyAction, combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ReducerManager, StateSchema } from './StateSchema';

export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: Array<keyof StateSchema> = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: StateSchema, action: AnyAction): any => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }
      return combinedReducer(state as any, action);
    },
    add: (key: keyof StateSchema, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },
    remove: (key: keyof StateSchema) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
