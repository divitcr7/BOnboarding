import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material';

export interface TypographyProps extends MuiTypographyProps {}

export function Typography({ ...rest }: TypographyProps) {
  return <MuiTypography {...rest} />;
}
