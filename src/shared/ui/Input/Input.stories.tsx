import { StoryObj } from '@storybook/react/*';
import { Input as Custominput } from './Input';

export default {
  title: 'UI/Input',
  component: Custominput,
};

type Story = StoryObj<typeof Custominput>;

export const Input: Story = {
  args: {
    label: 'E-mail',
    id: 'email',
  },
};

export const InputWithError: Story = {
  args: {
    label: 'E-mail',
    id: 'email',
    error: 'E-mail is invalid',
  },
};
