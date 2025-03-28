import './stylesheet.css';
import { ThemeOptions } from '@mui/material';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';

// Font weights need to correspond with the imports at the top of the file
const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightLightBold = 500;
const fontWeightBold = 700;

/**
 * Theme typography options that are the same across both the dark and light themes.
 */
const typography: ThemeOptions['typography'] = {
  fontFamily: ['GT Eesti Pro Display', 'DM Sans', 'sans-serif'].join(','),
  fontWeightLight,
  fontWeightRegular,
  fontWeightBold,

  h1: {
    fontSize: '2.625rem',
    fontWeight: fontWeightBold,
    lineHeight: '3.125rem',
  },
  h2: {
    fontSize: '2rem',
    fontWeight: fontWeightBold,
    lineHeight: '2.375rem',
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: fontWeightLightBold,
    lineHeight: '2.4375rem',
  },
  h3Light: {
    fontSize: '1.75rem',
    fontWeight: fontWeightLight,
    lineHeight: '2.4375rem',
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: fontWeightLightBold,
    lineHeight: '2.125rem',
  },
  h4Light: {
    fontSize: '1.5rem',
    fontWeight: fontWeightLight,
    lineHeight: '2.125rem',
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: fontWeightLightBold,
    lineHeight: '1.75rem',
  },
  h6: {
    fontSize: '1rem',
    fontWeight: fontWeightLightBold,
    lineHeight: '1.375rem',
  },
  body1: {
    fontFamily: ['DM Sans', 'sans-serif'].join(','),
    fontSize: '1rem',
    fontWeight: fontWeightRegular,
    lineHeight: '1.375rem',
  },
  body1Bold: {
    fontFamily: ['DM Sans', 'sans-serif'].join(','),
    fontSize: '1rem',
    fontWeight: fontWeightBold,
    lineHeight: '1.375rem',
  },
  body2: {
    fontFamily: ['DM Sans', 'sans-serif'].join(','),
    fontSize: '0.875rem',
    fontWeight: fontWeightRegular,
    lineHeight: '1.25rem',
  },
  body2Bold: {
    fontFamily: ['DM Sans', 'sans-serif'].join(','),
    fontSize: '0.875rem',
    fontWeight: fontWeightBold,
    lineHeight: '1.25rem',
  },
  bodySmall: {
    fontSize: '0.875rem',
    fontWeight: fontWeightBold,
    lineHeight: '1.25rem',
  },
  overline: {
    fontFamily: ['DM Sans', 'sans-serif'].join(','),
    fontSize: '0.875rem',
    fontWeight: fontWeightBold,
    lineHeight: '1.0625rem',
    letterSpacing: '0.06125rem',
    textTransform: 'uppercase',
  },
  overline2: {
    fontFamily: ['DM Sans', 'sans-serif'].join(','),
    fontSize: '0.75rem',
    fontWeight: fontWeightLightBold,
    lineHeight: '0.875rem',
  },
  overline3: {
    fontFamily: ['DM Sans', 'sans-serif'].join(','),
    fontSize: '0.625rem',
    fontWeight: fontWeightLightBold,
    lineHeight: '0.875rem',
  },
  button: {
    fontSize: '1rem',
    fontWeight: fontWeightBold,
    lineHeight: '1.25rem',
    textTransform: 'none',
  },
  menu: {
    fontSize: '1.25rem',
    fontWeight: fontWeightLightBold,
    lineHeight: '1.625rem',
  },
};

export default typography;
