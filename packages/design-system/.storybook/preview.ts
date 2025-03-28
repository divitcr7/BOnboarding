import type { Preview } from '@storybook/react';
import '@fontsource/material-icons';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import themes from '../src/Theme/themes';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      benchmark: themes.benchmark,
      insureInvestors: themes.insureInvestors,
    },
    defaultTheme: 'insureInvestors',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

const preview: Preview = {
  parameters: {
    layout: 'padded', // options: center, padded, fullscreen
    actions: {
      argTypesRegex: '^on[A-Z].*',
      handles: ['mouseover', 'click'],
    }, // for automatically adding actions to argTypes for onClick onHover ... https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
    expanded: true, // Adds the description and default columns
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#000000',
        },
      ],
    },
  },
};

export default preview;
