import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
body {
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.bg};

  font-family: ${(props) => props.theme.fonts};
  
}
`;
