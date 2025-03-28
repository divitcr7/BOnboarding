import { ThemeOptions } from '@mui/material';

const commonThemeOptions: Partial<ThemeOptions> = {
  spacing: (factor: number) => `${0.5 * factor}rem`, // theme.spacing(2); = 0.5 * 1rem = 0.5rem = 8px
  breakpoints: {
    values: {
      sm: 768,
      md: 1024,
      lg: 1200,
    },
  },
};

export default commonThemeOptions;
