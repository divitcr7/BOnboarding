import { createTheme } from '@mui/material';
import { Shadows } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import Components from './componentOverrides';
import commonThemeOptions from '../commonThemeSettings';

export default createTheme({
  ...commonThemeOptions,
  shape: {
    borderRadiusSm: 0,
    borderRadius: 0,
    borderRadiusLg: 0,
    circle: '100%',
    pill: '999999px',
    borderWidth: '2px',
  },
  palette,
  shadows: [
    'none',
    '0px 10px 29px 0px rgba(150, 169, 238, 0.25)',
    '0px 20px 29px 0px rgba(150, 169, 238, 0.25)',
    ...Array(22).fill('0px 20px 29px 0px rgba(150, 169, 238, 0.25)'),
  ] as Shadows,
  components: Components,
  typography,
});
