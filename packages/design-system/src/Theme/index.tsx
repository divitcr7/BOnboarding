import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import themes from './themes';
import './themeTypes';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: 'benchmark' | 'insureInvestors';
}

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
  const selectedTheme = themes[theme];
  return (
    <MuiThemeProvider theme={selectedTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { styled, alpha } from '@mui/material';
