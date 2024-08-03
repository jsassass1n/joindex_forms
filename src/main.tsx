import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from '@src/shared/theme/ThemeContextProvider';
import { Provider } from 'react-redux';
import { store } from '@src/shared/providers/ReduxProvider/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
