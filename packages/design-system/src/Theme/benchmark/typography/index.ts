import './stylesheet.css';

import { ThemeOptions } from '@mui/material';

const fontWeightLight = 400;
const fontWeightRegular = 500;
const fontWeightLightBold = 600;
const fontWeightBold = 700;

/**
 * Theme typography options that are the same across both the dark and light themes.
 */
const typography: ThemeOptions['typography'] = {
  fontFamily: ['Gilroy', 'sans-serif'].join(','),

  fontWeightLight,
  fontWeightRegular,
  fontWeightBold,

  h1: {
    fontSize: '3.125rem',
    fontWeight: fontWeightBold,
    lineHeight: '3.125rem',
  },
  h2: {
    fontSize: '2.25rem',
    fontWeight: fontWeightBold,
    lineHeight: '2.875rem',
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: fontWeightBold,
    lineHeight: '2.375rem',
  },
  h3Light: {
    fontSize: '1.75rem',
    fontWeight: fontWeightBold,
    lineHeight: '2.375rem',
  },
  h4: {
    fontSize: '1.375rem',
    fontWeight: fontWeightLightBold,
    lineHeight: '1.875rem',
  },
  h4Light: {
    fontSize: '1.375rem',
    fontWeight: fontWeightLightBold,
    lineHeight: '1.875rem',
  },
  h5: {
    fontSize: '1.125rem',
    fontWeight: fontWeightLightBold,
    lineHeight: '1.625rem',
  },
  body1: {
    fontSize: '1.125rem',
    fontWeight: fontWeightLight,
    lineHeight: '1.875rem',
  },
  body1Bold: {
    fontSize: '1.125rem',
    fontWeight: fontWeightLightBold,
    lineHeight: '1.875rem',
  },
  menu: {
    fontSize: '1.125rem',
    fontWeight: fontWeightLightBold,
    lineHeight: '1.875rem',
  },
  body2: {
    fontSize: '1rem',
    fontWeight: fontWeightLight,
    lineHeight: '1.75rem',
  },
  body2Bold: {
    fontSize: '1rem',
    fontWeight: fontWeightLightBold,
    lineHeight: '1.75rem',
  },
  bodySmall: {
    fontSize: '0.875rem',
    fontWeight: fontWeightLight,
    lineHeight: '1.5rem',
  },
  overline: {
    fontSize: '0.875rem',
    fontWeight: fontWeightBold,
    lineHeight: '1.75rem',
    textTransform: 'uppercase',
  },
  overline2: {
    fontSize: '0.875rem',
    fontWeight: fontWeightBold,
    lineHeight: '1.75rem',
    textTransform: 'uppercase',
  },
  overline3: {
    fontSize: '0.875rem',
    fontWeight: fontWeightBold,
    lineHeight: '1.75rem',
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: fontWeightRegular,
    lineHeight: '0.875rem',
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: fontWeightBold,
    lineHeight: '1.75rem',
    textTransform: 'uppercase',
  },
};

export default typography;
