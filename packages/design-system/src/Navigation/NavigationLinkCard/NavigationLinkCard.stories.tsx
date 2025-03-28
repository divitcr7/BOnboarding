import type { Meta, StoryObj } from '@storybook/react';
import { NavigationLinkCard } from '.';
import { Calendar } from '@benchmark-brokers/icons';
import { Box } from '@/index';

const meta = {
  component: NavigationLinkCard,
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationLinkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Calendar />,
    title: 'Schedule a call with our agent',
    subtitle: 'Need to request a certificate?',
    onClick: () => {},
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: '35rem', padding: '3rem', backgroundColor: 'grey.10' }}>
        <Story />
      </Box>
    ),
  ],
};
