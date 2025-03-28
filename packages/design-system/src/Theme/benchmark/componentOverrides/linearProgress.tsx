import { Components, Theme } from '@mui/material';

type ColorsType =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'error'
  | 'success'
  | 'info';

const Checkbox: Components<Theme>['MuiLinearProgress'] = {
  defaultProps: {
    variant: 'determinate',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const stateColor =
        theme.palette[ownerState.color as ColorsType] || theme.palette.info;
      return {
        backgroundColor: 'transparent',
        height: '0.25rem',
        borderRadius: theme.shape.pill,
        '&:after': {
          content: "''",
          position: 'absolute',
          borderRadius: theme.shape.pill,
          width: '100%',
          height: '60%',
          backgroundColor: ownerState.darkMode
            ? theme.palette.grey[600]
            : stateColor.disabled,
          left: 0,
          top: '20%',
          zIndex: 1,
        },
        '& .MuiLinearProgress-bar': {
          borderRadius: theme.shape.pill,
          zIndex: 2,
        },
      };
    },
  },
};

export default Checkbox;
