import { createContext, FC, ReactNode, useState } from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import { LOCAL_STORAGE_THEME } from '../config/constants';
import { AppThemes, dark, light } from './themes';
import { GlobalStyle } from './GlobalStyles';

interface ThemeContextProviderProps {
  children: ReactNode;
}

interface ThemeContextProps {
  theme: AppThemes;
  toggleTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: localStorage.getItem(LOCAL_STORAGE_THEME) as AppThemes,
});

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<AppThemes>(
    (localStorage.getItem(LOCAL_STORAGE_THEME) as AppThemes) || 'light'
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    localStorage.setItem(LOCAL_STORAGE_THEME, theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Provider theme={theme === 'light' ? light : dark}>
        <GlobalStyle />
        {children}
      </Provider>
    </ThemeContext.Provider>
  );
};
