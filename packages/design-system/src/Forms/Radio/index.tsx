import { Radio as MuiRadio, RadioProps as MuiRadioProps } from '@mui/material';

type RadioBaseProps = Pick<
  MuiRadioProps,
  | 'color'
  | 'size'
  | 'disabled'
  | 'onChange'
  | 'sx'
  | 'required'
  | 'name'
  | 'value'
>;

export interface RadioProps extends RadioBaseProps {
  darkMode?: boolean;
  checked: boolean;
}

export function Radio(props: RadioProps) {
  return <MuiRadio {...props} />;
}
