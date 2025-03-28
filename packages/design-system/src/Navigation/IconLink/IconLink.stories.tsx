import type { Meta, StoryObj } from '@storybook/react';
import { User, Mail } from '@benchmark-brokers/icons';
import { DarkModeDecorator } from '@/utils/decorators';

import { IconLink } from '.';

const meta = {
  component: IconLink,
  tags: ['autodocs'],
} satisfies Meta<typeof IconLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Mail />,
  },
};

export const WithLabel: Story = {
  args: {
    icon: <Mail />,
    label: 'Email',
  },
};

export const DarkMode: Story = {
  decorators: [DarkModeDecorator],
  args: {
    icon: <User />,
    label: 'Profile',
    darkMode: true,
  },
};
