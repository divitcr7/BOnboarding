import { BoxProps as MuiBoxProps, Box as MuiBox } from '@mui/material';

export interface BoxProps extends MuiBoxProps {}

export function Box(props: BoxProps) {
  return <MuiBox {...props} />;
}
