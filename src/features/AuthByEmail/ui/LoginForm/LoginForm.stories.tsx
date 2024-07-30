/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoryObj } from '@storybook/react/*';
import { LoginForm as LoginFromComponent } from './LoginForm';
import { Mockstore } from '@src/shared/config/storybook/mockRedux';

export default {
  title: 'Features/LoginForm',
  component: LoginFromComponent,
  decorators: [
    (Story: any) => (
      <Mockstore>
        <Story />
      </Mockstore>
    ),
  ],
};

type Story = StoryObj<typeof LoginFromComponent>;

export const LoginForm: Story = {
  args: {
    label: 'E-mail',
    id: 'email',
  },
};
