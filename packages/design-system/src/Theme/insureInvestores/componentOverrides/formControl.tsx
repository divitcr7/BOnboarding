import { Components, Theme } from '@mui/material';

const inputBase: Components<Theme>['MuiFormControl'] = {
  defaultProps: {
    defaultValue: '',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      '& .MuiInputBase-root': {
        borderRadius: theme.shape.borderRadiusLg,
      },
    }),
  },
};

export default inputBase;
