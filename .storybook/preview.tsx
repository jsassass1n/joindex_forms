import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeContextProvider } from '../src/shared/theme/ThemeContextProvider';
import { BrowserRouter } from 'react-router-dom';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeContextProvider>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </ThemeContextProvider>
    ),
  ],
};

export default preview;
