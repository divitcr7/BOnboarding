import { useMediaQuery as muiUseMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface useMediaQueryProps {
  breakPoint: 'sm' | 'md' | 'lg';
}
export function useMediaQuery({ breakPoint }: useMediaQueryProps) {
  const theme = useTheme();
  return muiUseMediaQuery(theme.breakpoints.down(breakPoint));
}
