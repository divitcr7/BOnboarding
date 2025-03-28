import { ThemeOptions } from '@mui/material';
import Button from './button';
import Radio from './radio';
import Checkbox from './checkbox';
import LinearProgress from './linearProgress';
import Container from './container';
import FormControl from './formControl';
import MenuItem from './menuItem';
import ButtonBase from './buttonBase';

const components: ThemeOptions['components'] = {
  MuiButton: Button,
  MuiRadio: Radio,
  MuiCheckbox: Checkbox,
  MuiLinearProgress: LinearProgress,
  MuiContainer: Container,
  MuiFormControl: FormControl,
  MuiMenuItem: MenuItem,
  MuiButtonBase: ButtonBase,
};

export default components;
