import type { Meta, StoryObj } from '@storybook/react';
import { GoogleMap } from '.';

const meta = {
  component: GoogleMap,
  tags: ['autodocs'],
} satisfies Meta<typeof GoogleMap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    lat: 32.715736,
    lng: -117.161087,
  },
};
