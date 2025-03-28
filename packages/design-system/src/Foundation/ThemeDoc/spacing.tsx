import { Grid } from '@/index';
import { Box } from '@mui/material';

export default function Spacing() {
  return (
    <>
      <Grid
        spacing={2}
        container
        alignItems={'flex-end'}
        sx={{ paddingTop: 8 }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => {
          const rem = item * 0.5;
          const px = 16 * rem;
          return (
            <Grid key={item}>
              <Box>
                <div
                  style={{
                    width: 20,
                    height: px,
                    backgroundColor: '#f4c3cb',
                  }}
                ></div>
                <span style={{ fontSize: 14 }}>
                  {px}px <br />
                  {rem}rem
                </span>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
