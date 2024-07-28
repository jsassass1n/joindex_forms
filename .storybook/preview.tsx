import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeContextProvider } from '../src/shared/theme/ThemeContextProvider';

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
        <Story />
      </ThemeContextProvider>
    ),
  ],
};

export default preview;
