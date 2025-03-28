import type { Meta, StoryObj } from '@storybook/react';
import { ChevronRight, Trash2 } from '@benchmark-brokers/icons';
import { DarkModeDecorator } from '@/utils/decorators';
import { RenderList, RenderListStoryObj } from '@/utils/renderTemplates';

import { Button } from '.';

const meta = {
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
  },
};

// Contained Variation
export const ContainedColors: RenderListStoryObj<typeof Button> = {
  render: RenderList,
  args: {
    items: [
      { ...Contained.args, children: 'Primary', color: 'primary' },
      { ...Contained.args, children: 'Secondary', color: 'secondary' },
      { ...Contained.args, children: 'Success', color: 'success' },
      { ...Contained.args, children: 'Error', color: 'error' },
      { ...Contained.args, children: 'Warning', color: 'warning' },
      { ...Contained.args, children: 'Info', color: 'info' },
    ],
    renderComponent: Button,
  },
};

export const ContainedSizes: RenderListStoryObj<typeof Button> = {
  render: RenderList,
  args: {
    items: [
      { ...Contained.args, size: 'large' },
      { ...Contained.args, size: 'medium' },
      { ...Contained.args, size: 'small' },
    ],
    renderComponent: Button,
  },
};

export const ContainedDisabled: Story = {
  args: {
    ...Contained.args,
    disabled: true,
  },
};

export const WithEndIcon: Story = {
  args: {
    ...Contained.args,
    endIcon: <ChevronRight />,
  },
};

export const WithStartIcon: Story = {
  args: {
    ...Contained.args,
    startIcon: <Trash2 />,
  },
};

// Outlined
export const Outline: Story = {
  args: {
    variant: 'outlined',
    children: 'Button',
  },
};

export const OutlineDisabled: Story = {
  args: {
    ...Outline.args,
    disabled: true,
  },
};

export const OutlineSizes: RenderListStoryObj<typeof Button> = {
  render: RenderList,
  args: {
    items: [
      { ...Outline.args, size: 'large' },
      { ...Outline.args, size: 'medium' },
      { ...Outline.args, size: 'small' },
    ],
    renderComponent: Button,
  },
};

export const OutlineDarkMode: Story = {
  decorators: [DarkModeDecorator],
  args: {
    ...Outline.args,
    darkMode: true,
  },
};

// Text
export const TextButton: Story = {
  args: {
    variant: 'text',
    children: 'text button',
  },
};

export const TextButtonWithIcon: Story = {
  args: {
    ...TextButton.args,
    endIcon: <ChevronRight />,
  },
};

export const TextButtonWithIconDisabled: Story = {
  args: {
    ...TextButtonWithIcon.args,
    disabled: true,
  },
};
