import type { Meta, StoryObj } from '@storybook/react';
import { DarkModeDecorator } from '@/utils/decorators';
import { NavigationButton } from '.';

const meta = {
  component: NavigationButton,
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    direction: 'right',
    disabled: true,
  },
};

export const DarkMode: Story = {
  decorators: [DarkModeDecorator],
  args: {
    ...Default.args,
    darkMode: true,
  },
};
