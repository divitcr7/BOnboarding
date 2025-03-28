import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '.';

const meta = {
  component: DatePicker,
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultValue: Story = {
  args: {
    label: 'date picker label',
  },
};
