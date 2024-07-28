import { Button, ButtonTheme } from './Button';
import type { StoryObj } from '@storybook/react';

export default {
  title: 'UI/Button',
  component: Button,
  args: {
    children: 'Button',
  },
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: ButtonTheme.PRIMARY,
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: ButtonTheme.SECONDARY,
    children: 'Secondary',
  },
};

export const Success: Story = {
  args: {
    variant: ButtonTheme.SUCCESS,
    children: 'Success',
  },
};

export const Danger: Story = {
  args: {
    variant: ButtonTheme.DANGER,
    children: 'Danger',
  },
};

export const Warning: Story = {
  args: {
    variant: ButtonTheme.WARNING,
    children: 'Warning',
  },
};

export const Default: Story = {
  args: {
    variant: ButtonTheme.DEFAULT,
    children: 'Default',
  },
};
