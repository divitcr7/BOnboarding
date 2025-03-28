import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import { Grid } from '.';

interface GridContainerProps {
  rowSpacing: number;
  columnSpacing: number;
  totalItems: number;
  columns: number;
  columnWide: number;
}

function GridContainer({
  rowSpacing,
  columnSpacing,
  totalItems,
  columns,
  columnWide,
}: GridContainerProps) {
  return (
    <Grid
      columns={columns}
      columnSpacing={columnSpacing}
      container
      rowSpacing={rowSpacing}
    >
      {[...Array(totalItems)].map((_, index) => (
        <Grid md={columnWide} key={index}>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              borderRadius: 5,
              padding: 2,
            }}
          >
            {index + 1}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

const meta = {
  component: GridContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<GridContainerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

/** ###number of item in column = columns / columnWide */
export const Grids: Story = {
  args: {
    rowSpacing: 2,
    columnSpacing: 4,
    columns: 12,
    columnWide: 3,
    totalItems: 12,
  },
};
