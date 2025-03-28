import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

type ButtonBaseProps = Pick<
  MuiButtonProps,
  | 'variant'
  | 'size'
  | 'color'
  | 'disabled'
  | 'startIcon'
  | 'endIcon'
  | 'fullWidth'
  | 'children'
  | 'sx'
  | 'type'
>;

export interface ButtonProps extends ButtonBaseProps {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  darkMode?: boolean;
}

export function Button({ ...rest }: ButtonProps) {
  return <MuiButton {...rest} />;
}
