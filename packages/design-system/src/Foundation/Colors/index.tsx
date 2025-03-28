import { Box, Grid, Typography } from '@mui/material';

const colorTypes = ['light', 'main', 'dark', 'darker', 'disabled'] as const;

const paletteStructure = {
  primary: colorTypes,
  secondary: colorTypes,
  success: colorTypes,
  warning: colorTypes,
  error: colorTypes,
  surface: colorTypes,
  grey: [
    '10',
    '20',
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ],
  text: ['primary', 'secondary', 'disabled'],
  info: colorTypes,
  tertiary: colorTypes,
} as const;

type PaletteType = keyof typeof paletteStructure;

export function Colors() {
  const paletteKeys = Object.keys(paletteStructure) as PaletteType[];

  return paletteKeys.map((palette) => (
    <Box sx={{ mb: 5, borderBottom: 1 }} key={palette}>
      <Typography variant="body1">{palette}:</Typography>

      <Grid container>
        {paletteStructure[palette].map((color) => (
          <Grid key={`${palette}-${color}`}>
            <Box
              sx={{
                width: 150,
                height: 150,
                m: 1,
                backgroundColor: `${palette}.${color}`,
                boxShadow: (theme) => theme.shadows[2],
              }}
            >
              <Typography
                variant="body2Bold"
                sx={{
                  p: 1,
                  color: (theme) =>
                    ['dark', 'darker'].includes(color)
                      ? `${palette}.contrastDarkerText`
                      : (theme.palette[palette] as any)?.contrastText ||
                        '#969696',
                }}
              >
                {color}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  ));
}
