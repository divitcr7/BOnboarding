import { Colors } from '.';
export const Docs = {
  render: () => {
    return (
      <>
        <Colors />
      </>
    );
  },
};

const meta = {
  component: Colors,
  parameters: {
    layout: 'padded',
    viewMode: 'docs',
    options: { showPanel: false },
  },
};
export default meta;
