import type { Meta, StoryObj } from '@storybook/react';
import { PolicyCoverageItem } from '.';
import { CloudRain, Wind } from '@benchmark-brokers/icons';

const meta = {
  component: PolicyCoverageItem,
  tags: ['autodocs'],
} satisfies Meta<typeof PolicyCoverageItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Wind and Hail Risk',
    icon: <CloudRain />,
    subtitle:
      'Covers property and structure damage caused by windstorms, including named tropical cyclones.',
    riskFactor: {
      label: 'High risk',
      isHighSever: true,
      severityDigit: 'F',
      severityInfo: 'LOAD ZONE: AE',
    },
    priceEstimate: {
      label: 'Estimated Roof Replacement Cost',
      amount: 28000,
    },
    riskExtraInfo: {
      icon: <Wind size="sm" />,
      label: 'Max Wind Gust',
      info: [
        {
          title: '27.5 mph',
          subtitle: 'This Year',
        },
        {
          title: '49.2 mph',
          subtitle: '30 Years',
        },
      ],
    },
    onDetail: () => {},
  },
  decorators: [
    (Story) => (
      <div style={{ width: '16rem' }}>
        <Story />
      </div>
    ),
  ],
};
