import { createTheme } from '@mui/material';
import { Shadows } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import Components from './componentOverrides';
import commonThemeOptions from '../commonThemeSettings';

export default createTheme({
  ...commonThemeOptions,
  palette,
  shape: {
    borderRadiusSm: 5,
    borderRadius: 5,
    borderRadiusLg: 12,
    circle: '100%',
    pill: '999999px',
    borderWidth: '2px',
  },
  shadows: [
    'none',
    '0px 4px 15px 0px rgba(14, 81, 78, 0.20)',
    '0px 10px 32px 0px rgba(12, 37, 70, 0.08)',
    ...Array(22).fill('0px 18px 60px 0px rgba(10, 28, 51, 0.05)'),
  ] as Shadows,
  components: Components,
  typography,
});
