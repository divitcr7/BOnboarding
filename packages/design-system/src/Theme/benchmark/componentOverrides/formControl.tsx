import { Components, Theme } from '@mui/material';

const inputBase: Components<Theme>['MuiFormControl'] = {
  defaultProps: {
    defaultValue: '',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      '& .MuiFormLabel-root.MuiInputLabel-root': {
        transform: 'none',
        position: 'relative',
        ...theme.typography.h5,
        color: ownerState.disabled
          ? theme.palette.grey[50]
          : theme.palette.grey[400],
        paddingBottom: theme.spacing(1),
      },
      '& .MuiInputBase-root': {
        backgroundColor: 'white',
        padding: `${theme.spacing(1)} ${theme.spacing(2)} !important`,
        '& legend': {
          display: 'none',
        },
        '& .MuiInputBase-input': {
          ...theme.typography.h4,
          color: theme.palette.grey[800],
          padding: '0 !important',
          '&::placeholder': {
            color: ownerState.disabled
              ? theme.palette.grey[50]
              : theme.palette.grey[300],
          },
        },
        '&:hover, &.Mui-focused': {
          '& fieldset.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.secondary.main,
          },
        },
        '&.Mui-disabled fieldset.MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.grey[50],
        },
        '&.Mui-error fieldset.MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.error.main,
        },
        '& .MuiInputAdornment-root .MuiTypography-root': {
          ...theme.typography.h4,
          color: theme.palette.grey[200],
        },
      },
      '& .MuiFormHelperText-root': {
        ...theme.typography.bodySmall,
        marginLeft: '0px',
        marginRight: '0px',
        marginTop: '0px',
        color: ownerState.error
          ? theme.palette.error.main
          : theme.palette.grey[400],
      },
    }),
  },
};

export default inputBase;
