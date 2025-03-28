import type { Meta, StoryObj } from '@storybook/react';
import { RenderList, RenderListStoryObj } from '@/utils/renderTemplates';
import { Chip } from '.';

const meta = {
  component: Chip,
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default chip',
    color: 'primary',
    onDelete: undefined,
  },
};

export const ContainedColors: RenderListStoryObj<typeof Chip> = {
  render: RenderList,
  args: {
    items: [
      { ...Default.args, label: 'Primary', color: 'primary' },
      { ...Default.args, label: 'Secondary', color: 'secondary' },
      { ...Default.args, label: 'Success', color: 'success' },
      { ...Default.args, label: 'Error', color: 'error' },
      { ...Default.args, label: 'Warning', color: 'warning' },
      { ...Default.args, label: 'Info', color: 'info' },
    ],
    renderComponent: Chip,
  },
};

export const Variants: RenderListStoryObj<typeof Chip> = {
  render: RenderList,
  args: {
    items: [
      { ...Default.args, label: 'Filled', color: 'primary' },
      {
        ...Default.args,
        label: 'Outlined',
        color: 'primary',
        variant: 'outlined',
      },
    ],
    renderComponent: Chip,
  },
};

export const withAction: RenderListStoryObj<typeof Chip> = {
  render: RenderList,
  args: {
    items: [
      { onDelete: () => {}, label: 'with Delete', color: 'primary' },
      {
        ...Default.args,
        label: 'with Click',
        color: 'primary',
        onClick: () => {},
      },
    ],
    renderComponent: Chip,
  },
};
