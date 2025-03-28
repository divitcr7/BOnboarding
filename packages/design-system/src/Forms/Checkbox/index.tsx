import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material';

type CheckboxBaseProps = Pick<
  MuiCheckboxProps,
  | 'color'
  | 'size'
  | 'disabled'
  | 'onChange'
  | 'required'
  | 'sx'
  | 'name'
  | 'value'
>;

export interface CheckboxProps extends CheckboxBaseProps {
  darkMode?: boolean;
  checked: boolean;
}

export function Checkbox(props: CheckboxProps) {
  return <MuiCheckbox {...props} />;
}
