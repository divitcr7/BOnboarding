import type { StoryObj } from '@storybook/react';
import { Box } from '@/index';

export type RenderListProps<T> = {
  renderComponent: React.ComponentType<T>;
  items: T[];
};

export type RenderListStoryObj<T extends (...args: any) => any> = StoryObj<
  RenderListProps<Parameters<T>[0]>
>;

export function RenderList<T extends object>({
  renderComponent: Component,
  items,
  ...args
}: RenderListProps<T>) {
  return (
    <Box>
      {items.map((itemArgs, index) => (
        <Box key={index} mb={2}>
          <Component {...args} {...itemArgs} />
        </Box>
      ))}
    </Box>
  );
}
