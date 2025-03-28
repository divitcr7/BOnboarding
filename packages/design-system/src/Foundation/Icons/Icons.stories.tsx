import { Icons } from '.';
import { Home } from '@benchmark-brokers/icons';

const meta = {
  component: Icons,
  parameters: {
    layout: 'padded',
    viewMode: 'docs',
    options: { showPanel: false },
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    color: {
      control: { type: 'color' },
    },
  },
};

export const Docs = {
  render: () => {
    return (
      <>
        <Icons />
      </>
    );
  },
};

export const Sample = {
  render: ({ ...args }) => {
    return <Home size="lg" color="#be1966" {...args} />;
  },
  parameters: {
    layout: 'centered',
    options: { showPanel: true },
  },
};

export default meta;
