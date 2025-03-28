import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from '.';
import AvatarImage from '@/images/avatar.jpg';

const meta = {
  component: ProfileCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Default',
    subTitle: 'Default',
    avatarImageUrl: AvatarImage,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '24rem' }}>
        <Story />
      </div>
    ),
  ],
};
