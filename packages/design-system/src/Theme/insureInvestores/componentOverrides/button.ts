import { Components, Theme } from '@mui/material';

type ColorsType =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'error'
  | 'success'
  | 'info';

const button: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      transition: 'all .4s ease-out',
      '& svg': {
        transition: 'all 0.3s',
        width: '1rem',
        height: '1rem',
      },
      '& .MuiButton-endIcon': {
        marginRight: `-${theme.spacing(4)}`,
        marginLeft: theme.spacing(3),
      },
      '& .MuiButton-startIcon': {
        marginLeft: `-${theme.spacing(4)}`,
        marginRight: theme.spacing(3),
      },
    }),
    text: ({ theme, ownerState }) => {
      const stateColor =
        theme.palette[ownerState.color as ColorsType] || theme.palette.info;
      return {
        position: 'relative',
        color: theme.palette.grey[800],
        transition: 'all 0.3s',
        padding: 0,
        '&.MuiButton-text': {
          padding: `${theme.spacing(1)} 0`,
        },
        '& .MuiButton-endIcon': {
          marginRight: 0,
          marginLeft: theme.spacing(1),
        },
        '& .MuiButton-startIcon': {
          marginLeft: 0,
          marginRight: theme.spacing(1),
        },
        '& svg': {
          transition: 'all 0.3s',
          fill: theme.palette.grey[800],
        },
        '&:hover': {
          backgroundColor: 'transparent',
          color: stateColor.main,
          '& svg': {
            fill: stateColor.main,
          },
        },
        '&.Mui-disabled': {
          color: stateColor.disabled,
          '& svg': {
            fill: stateColor.disabled,
          },
          '&:after': {
            backgroundColor: stateColor.disabled,
          },
        },
      };
    },
  },
};

export default button;
