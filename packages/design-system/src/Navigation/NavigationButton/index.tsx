import { styled } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@benchmark-brokers/icons';

export interface NavigationButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  onClick: () => void;
  disabled?: boolean;
  direction?: 'right' | 'left';
  darkMode?: boolean;
}

export function NavigationButton({
  direction,
  darkMode,
  ...rest
}: NavigationButtonProps) {
  return (
    <Button {...rest} darkMode={darkMode}>
      {direction === 'right' ? <ChevronRight /> : <ChevronLeft />}
    </Button>
  );
}
const Button = styled('button', {
  shouldForwardProp: (prop: string) => !['darkMode'].includes(prop),
})<{ darkMode?: boolean }>(({ theme, darkMode }) => ({
  background: 'transparent',
  padding: '1.3rem',
  border: `1px solid ${
    darkMode
      ? theme.palette.primary.contrastText
      : theme.palette.primary.contrastDarkerText
  }`,
  backgroundColor: darkMode ? theme.palette.primary.contrastDarkerText : '',
  borderRadius: theme.shape.circle,
  transition: 'all 0.3s',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  '& svg': {
    width: '0.9rem',
    height: '0.9rem',
    transition: 'fill 0.3s',
    fill: darkMode
      ? theme.palette.primary.contrastText
      : theme.palette.primary.contrastDarkerText,
  },
  '&:hover:not([disabled])': {
    '& svg': {
      fill: theme.palette.primary.main,
    },
  },
  '&:disabled': {
    cursor: 'default',
    borderColor: theme.palette.grey['200'],
    '& svg': {
      fill: theme.palette.grey['200'],
    },
  },
}));
