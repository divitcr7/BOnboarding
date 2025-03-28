import '@mui/material';

declare module '@mui/material' {
  interface Color {
    10: string;
    20: string;
  }
}

declare module '@mui/material/styles' {
  // Color
  interface Palette {
    surface: Palette['primary'];
    tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    surface?: PaletteOptions['primary'];
    tertiary?: PaletteOptions['primary'];
  }
  interface PaletteColor {
    darker: string;
    disabled?: string;
    contrastDarkerText?: string;
  }

  interface Color {
    10: string;
    20: string;
  }

  interface ColorPartial {
    10?: string;
    20?: string;
  }

  interface SimplePaletteColorOptions {
    darker: string;
    disabled?: string;
    contrastDarkerText?: string;
  }

  // Typography
  interface TypographyVariants {
    body1Bold: React.CSSProperties;
    body2Bold: React.CSSProperties;
    bodySmall: React.CSSProperties;
    h3Light: React.CSSProperties;
    h4Light: React.CSSProperties;
    overline2: React.CSSProperties;
    overline3: React.CSSProperties;
    menu: React.CSSProperties;
  }
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body1Bold: React.CSSProperties;
    body2Bold: React.CSSProperties;
    bodySmall: React.CSSProperties;
    h3Light: React.CSSProperties;
    h4Light: React.CSSProperties;
    overline2: React.CSSProperties;
    overline3: React.CSSProperties;
    menu: React.CSSProperties;
  }

  // BreakPoints
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: false;
  }
  interface Theme {
    shape: {
      borderRadiusSm?: number;
      borderRadius?: number;
      borderRadiusLg?: number;
      pill?: string;
      circle?: string;
      borderWidth?: string;
    };
  }

  interface ThemeOptions {
    shape: {
      borderRadiusSm?: number;
      borderRadius?: number;
      borderRadiusLg?: number;
      pill?: string;
      circle?: string;
      borderWidth?: string;
    };
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body1Bold: true;
    body2Bold: true;
    bodySmall: true;
    menu: true;
    h3Light: true;
    h4Light: true;
    overline2: true;
    overline3: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonOwnProps {
    darkMode?: boolean;
  }
}

declare module '@mui/material/LinearProgress' {
  interface LinearProgressProps {
    darkMode?: boolean;
  }
}

declare module '@mui/material/Radio' {
  interface RadioPropsColorOverrides {
    surface: true;
  }
}
