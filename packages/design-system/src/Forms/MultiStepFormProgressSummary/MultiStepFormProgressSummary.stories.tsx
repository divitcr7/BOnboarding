import type { Meta, StoryObj } from '@storybook/react';

import { MultiStepFormProgressSummary } from '.';

const meta = {
  component: MultiStepFormProgressSummary,
  tags: ['autodocs'],
} satisfies Meta<typeof MultiStepFormProgressSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      'id-1': { id: 'id-1', title: 'Insurance Type', status: 'completed' },
      'id-2': {
        id: 'id-2',
        title: 'Industry',
        status: 'completed',
      },
      'id-3': {
        id: 'id-3',
        title: 'Business info',
        status: 'completed',
        sub: ['id-4', 'id-5'],
      },
      'id-4': { id: 'id-4', title: 'Policy Type', status: 'completed' },
      'id-5': { id: 'id-5', title: 'Business details', status: 'completed' },
      'id-6': { id: 'id-6', title: 'Locations', status: 'pending' },
      'id-7': { id: 'id-7', title: 'Property info', status: 'pending' },
      'id-8': { id: 'id-8', title: 'Quote', status: 'pending' },
    },
    orderIds: ['id-1', 'id-2', 'id-3', 'id-6', 'id-7', 'id-8'],
    activeStep: 'id-6',
    canSelectCompletedItem: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '24rem' }}>
        <Story />
      </div>
    ),
  ],
};
