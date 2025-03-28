import type { Meta, StoryObj } from '@storybook/react';
import { Paper } from '.';

const meta = {
  component: Paper,
  tags: ['autodocs'],
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultArgs: Story = {
  args: {
    children: <p>Sample Box</p>,
  },
};
