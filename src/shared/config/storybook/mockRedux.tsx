import { store } from '@src/shared/providers/ReduxProvider/store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

interface MockStoreProps {
  children: ReactNode;
}

export const Mockstore = ({ children }: MockStoreProps) => (
  <Provider store={store}>{children}</Provider>
);
