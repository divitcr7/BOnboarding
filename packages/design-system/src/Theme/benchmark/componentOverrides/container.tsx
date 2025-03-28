import { Components, Theme } from '@mui/material';

const Checkbox: Components<Theme>['MuiContainer'] = {
  defaultProps: {
    maxWidth: false,
  },
  styleOverrides: {
    root: {
      maxWidth: '1400px',
    },
  },
};

export default Checkbox;
