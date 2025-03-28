import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight, Trash2 } from '@benchmark-brokers/icons';

import { IconButton } from '.';

const meta = {
  component: IconButton,
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <ArrowRight />,
  },
};

export const Disabled: Story = {
  args: {
    icon: <ArrowRight />,
    disabled: true,
  },
};

/**
 * for adding icon you need to import icon like `import { Trash } from '@benchmark-brokers/icons'`;
  and pass it as icon props to the component.
 */
export const SearchIcon: Story = {
  args: {
    icon: <Trash2 />,
  },
};
