import type { Meta, StoryObj } from '@storybook/react';
import { PropertyFeatureCard } from '.';
import { FormDecorator } from '@/utils/decorators';

const meta: Meta<typeof PropertyFeatureCard> = {
  component: PropertyFeatureCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

function TestIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="88"
      height="88"
      viewBox="0 0 88 88"
      fill="none"
    >
      <path d="M30.9004 6H9.90039V11.3H30.9004V6Z" fill="#C5C7E9" />
      <path d="M78.3004 24.8H30.9004V85.8001H78.3004V24.8Z" fill="#E1E2EF" />
      <path
        d="M71.8998 31.8H37.2998V66.4001H71.8998V31.8Z"
        fill="white"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M81.1004 19.8999H30.9004V24.6999H81.1004V19.8999Z"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M30.9004 6H9.90039V85.8H30.9004V6Z"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M33.0998 1.80005H7.7998V6.00005H33.0998V1.80005Z"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M25.2996 15H15.5996V76.8H25.2996V15Z"
        fill="#E1E2EF"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M51.4998 71H37.2998V85.8H51.4998V71Z"
        fill="white"
        stroke="#19C19E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M44.4004 71V85.8"
        stroke="#19C19E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M71.9998 71H57.7998V85.8H71.9998V71Z"
        fill="white"
        stroke="#19C19E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M64.7998 71V85.8"
        stroke="#19C19E"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M63.2998 31.8V66.5"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M54.5996 31.8V66.5"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M46 31.8V66.5"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M37.2998 40.5H71.9998"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M37.2998 49.2H71.9998"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M37.2998 57.8H71.9998"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path d="M78.3004 24.8H30.9004V30.1H78.3004V24.8Z" fill="#C5C7E9" />
      <path
        d="M78.3004 24.8H30.9004V85.8001H78.3004V24.8Z"
        stroke="#232675"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

export const Default: Story = {
  args: {
    icon: <TestIcon />,
    title: 'Roof Covering Type',
    radioGroupElementProps: {
      name: 'optionSelectionRadio',
      options: [
        {
          id: 'option1',
          label: 'Label 1',
        },
        {
          id: 'option2',
          label: 'Label 2',
        },
        {
          id: 'option3',
          label: 'Label 3',
        },
      ],
    },
    selectElementProps: {
      label: 'Year Updated',
      name: 'selectOptions',
      options: [
        { label: 'First', value: '1' },
        { label: 'Second', value: '2' },
        { label: 'Third', value: '3' },
      ],
    },
  },
  decorators: [
    FormDecorator,
    (Story) => (
      <div style={{ width: '24rem' }}>
        <Story />
      </div>
    ),
  ],
};
