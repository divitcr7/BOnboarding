import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
} from '@mui/material';

export interface LinearProgressProps extends MuiLinearProgressProps {
  darkMode?: boolean;
  variant?: 'determinate' | 'indeterminate' | 'query';
}

export function LinearProgress({
  variant = 'determinate',
  ...rest
}: LinearProgressProps) {
  return <MuiLinearProgress {...rest} variant={variant} />;
}
