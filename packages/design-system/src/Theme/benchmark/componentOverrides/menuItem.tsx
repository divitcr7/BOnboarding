import { Components, Theme } from '@mui/material';

const MenuItem: Components<Theme>['MuiMenuItem'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      margin: `0px ${theme.spacing(1)}`,
      ...theme.typography.body1,
      backgroundColor: 'white',
      '&.Mui-selected:hover, &:hover': {
        backgroundColor: theme.palette.surface.main,
      },
      '&.Mui-selected': {
        color: theme.palette.secondary.main,
        ...theme.typography.body1Bold,
        backgroundColor: 'white',
      },
    }),
  },
};
export default MenuItem;
