import type { Meta, StoryObj } from '@storybook/react';
import { TextFieldElement } from '.';
import { FormDecorator } from '@/utils/decorators';

const meta = {
  component: TextFieldElement,
  tags: ['autodocs'],
} satisfies Meta<typeof TextFieldElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultValue: Story = {
  decorators: [FormDecorator],
  args: {
    name: 'textField',
    label: 'Label',
  },
};

export const Currency: Story = {
  decorators: [FormDecorator],
  args: {
    name: 'currency',
    label: 'Add Price',
    prefix: '$',
    type: 'number',
  },
};
