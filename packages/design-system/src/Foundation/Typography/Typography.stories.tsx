import type { Meta } from '@storybook/react';
import { Typography, TypographyProps } from '.';
import { RenderList, RenderListStoryObj } from '@/utils/renderTemplates';

interface RenderProps extends TypographyProps {
  items: TypographyProps['variant'][];
}

const meta = {
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<RenderProps>;

export default meta;

const items = [
  'h1',
  'h2',
  'h3',
  'h3Light',
  'h4',
  'h4Light',
  'h5',
  'h6',
  'body1',
  'body1Bold',
  'body2',
  'body2Bold',
  'bodySmall',
  'overline',
  'overline2',
  'overline3',
  'button',
  'menu',
  'caption',
].map((item) => ({ children: `This is a text as ${item}`, variant: item }));

export const Defult: RenderListStoryObj<typeof Typography> = {
  render: RenderList,
  args: {
    items: items as any,
    renderComponent: Typography,
  },
};
