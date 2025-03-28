import type { Meta, StoryObj } from '@storybook/react';
import { SelectElement } from '.';
import { FormDecorator } from '@/utils/decorators';

const meta = {
  component: SelectElement,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultValue: Story = {
  decorators: [FormDecorator],
  args: {
    label: 'Select Option',
    fullWidth: true,
    name: 'selectOptions',
    options: [
      { label: 'First', value: '1' },
      { label: 'Second', value: '2' },
      { label: 'Third', value: '3' },
    ],
  },
};
