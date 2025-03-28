import { StoryFn } from '@storybook/react';
import { FormContainer } from '@/index';

export function DarkModeDecorator(Story: StoryFn) {
  return (
    <div style={{ background: 'black', padding: '30px' }}>
      <Story />
    </div>
  );
}

export function FormDecorator(Story: StoryFn) {
  return (
    <FormContainer>
      <Story />
    </FormContainer>
  );
}
