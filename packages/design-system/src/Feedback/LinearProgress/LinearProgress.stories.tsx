import type { Meta, StoryObj } from '@storybook/react';
import { LinearProgress } from '.';
import { RenderList, RenderListStoryObj } from '@/utils/renderTemplates';
import { DarkModeDecorator } from '@/utils/decorators';

const meta = {
  component: LinearProgress,
  tags: ['autodocs'],
} satisfies Meta<typeof LinearProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 30,
    variant: 'determinate',
  },
};

export const DarkModeIndeterminate: Story = {
  decorators: [DarkModeDecorator],
  args: {
    variant: 'indeterminate',
    darkMode: true,
  },
};

export const Colors: RenderListStoryObj<typeof LinearProgress> = {
  render: RenderList,
  args: {
    items: [
      { color: 'primary', value: 30 },
      { color: 'secondary', value: 50 },
      { color: 'success', value: 30 },
      { color: 'error', value: 60 },
      { color: 'warning', value: 10 },
    ],
    renderComponent: LinearProgress,
  },
};
