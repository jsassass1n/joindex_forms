import { Reducer } from '@reduxjs/toolkit';
import {
  ReduxStoreWithManager,
  StateSchema,
} from '@src/shared/providers/ReduxProvider/StateSchema';
import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';

interface DynamicModuleLoaderProps {
  name: keyof StateSchema;
  reducer: Reducer;
  children: ReactNode;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { children, name, reducer, removeAfterUnmount = true } = props;
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    if (!store.reducerManager.getReducerMap()[name]) {
      store.reducerManager.add(name as keyof StateSchema, reducer);
    }
    return () => {
      if (removeAfterUnmount) {
        store.reducerManager.remove(name as keyof StateSchema);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};
