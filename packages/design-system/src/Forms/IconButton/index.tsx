import { forwardRef } from 'react';
import { styled, SxProps, Theme } from '@mui/material';

export interface IconButtonProps extends React.ComponentPropsWithRef<'button'> {
  icon: React.ReactElement;
  onClick: () => void;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

export type Ref = HTMLButtonElement;

export const IconButton = forwardRef<Ref, IconButtonProps>(function (
  { icon, ...rest },
  ref
) {
  return (
    <Button ref={ref} {...rest}>
      {icon}
    </Button>
  );
});

IconButton.displayName = 'IconButton';

const Button = styled('button')(({ theme }) => ({
  background: 'transparent',
  outline: 'none',
  width: '3.5rem',
  height: '3.5rem',
  border: '1px solid transparent',
  borderRadius: '100%',
  transition: 'all 0.3s',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  '& svg': {
    transition: 'fill 0.3s',
    fill: theme.palette.secondary.main,
  },
  '&:hover:not([disabled])': {
    borderColor: theme.palette.primary.main,
    '& svg': {
      fill: theme.palette.primary.main,
    },
  },
  '&:active:not([disabled])': {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    '& svg': {
      fill: theme.palette.primary.contrastText,
    },
  },
  '&:disabled': {
    cursor: 'default',
    '& svg': {
      fill: theme.palette.primary.disabled,
    },
  },
}));
