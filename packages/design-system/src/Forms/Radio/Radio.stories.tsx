import type { Meta, StoryObj } from '@storybook/react';
import { DarkModeDecorator } from '@/utils/decorators';

import { Radio } from '.';

const meta = {
  component: Radio,
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const CheckedError: Story = {
  args: {
    checked: true,
    color: 'error',
  },
};

export const UncheckedDarkMode: Story = {
  decorators: [DarkModeDecorator],
  args: {
    checked: false,
    darkMode: true,
  },
};

export const CheckedDarkMode: Story = {
  decorators: [DarkModeDecorator],
  args: {
    checked: true,
    darkMode: true,
  },
};

export const CheckedDisabledDarkMode: Story = {
  decorators: [DarkModeDecorator],
  args: {
    checked: true,
    disabled: true,
    darkMode: true,
  },
};
