import { ThemeOptions } from '@mui/material';
import Button from './button';
import Radio from '@/Theme/benchmark/componentOverrides/radio';
import MenuItem from '@/Theme/benchmark/componentOverrides/menuItem';
import FormControl from './formControl';

const components: ThemeOptions['components'] = {
  MuiButton: Button,
  MuiRadio: Radio,
  MuiFormControl: FormControl,
  MuiMenuItem: MenuItem,
};

export default components;
