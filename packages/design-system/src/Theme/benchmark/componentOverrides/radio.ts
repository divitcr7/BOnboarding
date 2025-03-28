import { Components, Theme } from '@mui/material';

type ColorsType =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'error'
  | 'success'
  | 'info'
  | 'surface';

const Radio: Components<Theme>['MuiRadio'] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const stateColor =
        theme.palette[ownerState.color as ColorsType] || theme.palette.info;

      return {
        width: '1.5rem',
        height: '1.5rem',
        padding: '0',
        color:
          ownerState.color === 'primary'
            ? theme.palette.grey[200]
            : ownerState.color === 'surface'
            ? theme.palette.surface.dark
            : stateColor.main,
        '&.Mui-checked': {
          color:
            ownerState.color === 'primary'
              ? theme.palette.grey[200]
              : ownerState.color === 'surface'
              ? theme.palette.surface.dark
              : stateColor.main,
        },
        '&:hover': {
          color: ownerState.checked ? '' : theme.palette.grey[300],
        },
        '&.Mui-disabled': {
          color: theme.palette.grey[50],
        },
        ...(ownerState.darkMode
          ? {
              color: theme.palette.primary.contrastText,
              '&:hover': {
                color: theme.palette.primary.main,
              },
              '&.Mui-disabled': {
                color: theme.palette.grey[300],
              },
            }
          : {}),
        ...(ownerState.color === 'error'
          ? {
              color: stateColor.main,
              '&:hover': {
                color: stateColor.main,
              },
              '&.Mui-disabled': {
                color: stateColor.disabled,
              },
            }
          : {}),
      };
    },
  },
};

export default Radio;
