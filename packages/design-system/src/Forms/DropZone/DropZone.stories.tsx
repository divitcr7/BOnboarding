import type { Meta, StoryObj } from '@storybook/react';
import { DropZone } from '.';

const meta = {
  component: DropZone,
  tags: ['autodocs'],
} satisfies Meta<typeof DropZone>;

export default meta;
type Story = StoryObj<typeof meta>;

function StorySampleIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.58579 7.58579C5.96086 7.21071 6.46957 7 7 7H17C17.2652 7 17.5196 7.10536 17.7071 7.29289L22.7071 12.2929C22.8946 12.4804 23 12.7348 23 13V27C23 27.5304 22.7893 28.0391 22.4142 28.4142C22.0391 28.7893 21.5304 29 21 29H7C6.46957 29 5.96086 28.7893 5.58579 28.4142C5.21071 28.0391 5 27.5304 5 27V9C5 8.46957 5.21071 7.96086 5.58579 7.58579ZM16.5858 9L7 9L7 27H21V13.4142L16.5858 9Z"
        fill="#2901E8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289L26.7071 8.29289C26.8946 8.48043 27 8.73478 27 9V23C27 23.5304 26.7893 24.0391 26.4142 24.4142C26.0391 24.7893 25.5304 25 25 25H22C21.4477 25 21 24.5523 21 24C21 23.4477 21.4477 23 22 23H25V9.41421L20.5858 5L11 5L11 8C11 8.55228 10.5523 9 10 9C9.44772 9 9 8.55228 9 8V5C9 4.46957 9.21071 3.96086 9.58579 3.58579Z"
        fill="#2901E8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 19C10 18.4477 10.4477 18 11 18H17C17.5523 18 18 18.4477 18 19C18 19.5523 17.5523 20 17 20H11C10.4477 20 10 19.5523 10 19Z"
        fill="#2901E8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 23C10 22.4477 10.4477 22 11 22H17C17.5523 22 18 22.4477 18 23C18 23.5523 17.5523 24 17 24H11C10.4477 24 10 23.5523 10 23Z"
        fill="#2901E8"
      />
    </svg>
  );
}

export const Default: Story = {
  args: {
    title: 'Add any supporting documentation needed to help quote this policy',
    icon: <StorySampleIcon />,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '55rem' }}>
        <Story />
      </div>
    ),
  ],
};
