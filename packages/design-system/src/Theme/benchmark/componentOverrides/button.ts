import { Components, Theme } from '@mui/material';

type ColorsType =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'error'
  | 'success'
  | 'info';

const button: Components<Theme>['MuiButton'] = {
  defaultProps: {
    variant: 'contained',
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      borderRadius:
        ownerState.size === 'small' ? '0rem .7rem' : '0rem 1.125rem',
      boxShadow: 'none',
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
    outlined: ({ theme, ownerState }) => {
      const stateColor =
        theme.palette[ownerState.color as ColorsType] || theme.palette.info;

      return {
        border: `2px solid ${
          ownerState.darkMode ? stateColor.contrastText : stateColor.main
        }`,
        background: `linear-gradient(to right, ${stateColor.main} 50%, ${
          ownerState.darkMode ? 'transparent' : 'white'
        } 50%)`,
        backgroundSize: ' 200% 100%',
        backgroundPosition: 'right bottom',
        '&:hover': {
          backgroundPosition: ' left bottom',
          color: stateColor.contrastText,
          border: `2px solid ${stateColor.main}`,
          '& svg': {
            fill: stateColor.contrastText,
          },
        },
        '& svg': {
          fill: ownerState.darkMode ? stateColor.contrastText : stateColor.main,
        },
        color: ownerState.darkMode ? stateColor.contrastText : stateColor.main,
        '&.Mui-disabled': {
          border: `2px solid ${stateColor.disabled}`,
          color: stateColor.disabled,
          '& svg': {
            fill: stateColor.disabled,
          },
        },
      };
    },
    contained: ({ theme, ownerState }) => {
      const stateColor =
        theme.palette[ownerState.color as ColorsType] || theme.palette.info;
      return {
        background: `linear-gradient(to right, ${stateColor.darker} 50%, ${stateColor.main} 50%)`,
        backgroundSize: ' 200% 100%',
        backgroundPosition: 'right bottom',
        '&:hover': {
          backgroundPosition: ' left bottom',
        },
        '& svg': {
          fill: stateColor.contrastText,
        },
        '&&.Mui-disabled': {
          color: stateColor.contrastText,
          background: stateColor.disabled,
          '& svg': {
            fill: stateColor.contrastText,
          },
        },
      };
    },

    sizeSmall: ({ theme, ownerState }) => ({
      padding: `${theme.spacing(1)} ${theme.spacing(5)}`,
      '&:after':
        ownerState.variant === 'text'
          ? {
              bottom: '.5rem',
              width: '50%',
            }
          : '',
    }),
    sizeMedium: ({ theme }) => ({
      padding: `${theme.spacing(2)} ${theme.spacing(7)}`,
    }),
    sizeLarge: ({ theme }) => ({
      padding: `${theme.spacing(2)} ${theme.spacing(9)}`,
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
        '&:after': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '1.5px',
          backgroundColor: stateColor.main,
          bottom: 0,
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
