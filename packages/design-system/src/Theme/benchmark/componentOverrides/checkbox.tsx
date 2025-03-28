import { Components, Theme } from '@mui/material';

type ColorsType =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'error'
  | 'success'
  | 'info';

const Checkbox: Components<Theme>['MuiCheckbox'] = {
  defaultProps: {
    disableRipple: true,
    icon: <div />,
    checkedIcon: <div className="Checkedcheckbox" />,
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const stateColor =
        theme.palette[ownerState.color as ColorsType] || theme.palette.info;

      return {
        width: '1.5rem',
        height: '1.5rem',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderRadius: '0',
        padding: '0',
        borderColor:
          ownerState.color === 'primary'
            ? theme.palette.grey[200]
            : stateColor.main,
        '&.Mui-checked': {
          borderColor: stateColor.main,
          '&:hover': {
            borderColor: stateColor.main,
          },
        },
        '& .Checkedcheckbox': {
          width: '68%',
          height: '68%',
          backgroundColor: stateColor.main,
        },
        '&:hover': {
          borderColor: theme.palette.grey[300],
        },
        '&.Mui-disabled': {
          borderColor: theme.palette.grey[50],
          '& .Checkedcheckbox': {
            width: '68%',
            height: '68%',
            backgroundColor: theme.palette.grey[50],
          },
        },
        ...(ownerState.darkMode
          ? {
              borderColor: theme.palette.primary.contrastText,
              '&.Mui-checked': {
                borderColor: stateColor.main,
                '& .Checkedcheckbox': {
                  backgroundColor: stateColor.main,
                },
              },
              '&:hover': {
                borderColor: theme.palette.primary.main,
              },
              '&.Mui-disabled': {
                borderColor: theme.palette.grey[300],
                '& .Checkedcheckbox': {
                  backgroundColor: theme.palette.grey[300],
                },
              },
            }
          : {}),
        ...(ownerState.color === 'error'
          ? {
              borderColor: stateColor.main,
              '&:hover': {
                borderColor: stateColor.main,
              },
              '&.Mui-disabled': {
                borderColor: stateColor.disabled,
                '& .Checkedcheckbox': {
                  backgroundColor: stateColor.disabled,
                },
              },
            }
          : {}),
      };
    },
  },
};

export default Checkbox;
