const palette = {
  mode: 'light',
  primary: {
    light: '#ec4079',
    main: '#E91E63',
    dark: '#D81859',
    darker: '#B4174C',
    disabled: '#F8D4E0',
    contrastText: '#ffffff',
    contrastDarkerText: '#000000',
  },
  secondary: {
    light: '#72dbd4',
    main: '#00CCC2',
    dark: '#0EB7AE',
    darker: '#0CA099',
    disabled: '#CFE9E7',
    contrastText: '#ffffff',
    contrastDarkerText: '#ffffff',
  },
  tertiary: {
    light: '#FEF5F8',
    main: '#FFECF3',
    dark: '#FFD3E3',
    darker: '#FFD3E3',
    contrastText: '#000000',
  },
  success: {
    light: '#66bb69',
    main: '#4CAF50',
    dark: '#459E48',
    darker: '#419544',
    disabled: '#DBEFDC',
    contrastText: '#ffffff',
    contrastDarkerText: '#ffffff',
  },
  warning: {
    light: '#ffa826',
    main: '#FF9800',
    dark: '#E68900',
    darker: '#D98100',
    disabled: '#FFEACC',
    contrastText: '#ffffff',
    contrastDarkerText: '#ffffff',
  },
  error: {
    light: '#f37476',
    main: '#ff5252',
    dark: '#E64A4A',
    darker: '#CC4242',
    disabled: '#FFDCDC',
    contrastText: '#ffffff',
    contrastDarkerText: '#000000',
  },
  surface: {
    light: '#FBFCFF',
    main: '#F7FBFD',
    dark: '#000E50',
    darker: '#0D1958',
    contrastText: '#000000',
    contrastDarkerText: '#ffffff',
  },
  grey: {
    10: '#FAFAFB',
    20: '#FAFAFB',
    50: '#E6E8EA',
    100: '#CED2D6',
    200: '#B5BAC1',
    300: '#9DA4AD',
    400: '#848D99',
    500: '#6C7785',
    600: '#536070',
    700: '#3B495C',
    800: '#223247',
    900: '#0A1C33',
  },
  text: {
    primary: '#0A1C33',
    secondary: '#00CCC2',
    disabled: '#CED2D6',
  },
  info: {
    light: '#E8F2F8',
    main: '#DAF8FF',
    dark: '#7EEFFF',
    darker: '#7EEFFF',
    contrastText: '#000000',
  },
} as const;

export default palette;
