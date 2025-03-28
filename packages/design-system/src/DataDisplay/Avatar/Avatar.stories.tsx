import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '.';
import AvatarImage from '@/images/avatar.jpg';

const meta = {
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithImage: Story = {
  args: {
    src: AvatarImage,
  },
};

export const Bordered: Story = {
  args: {
    border: 'md',
  },
};
