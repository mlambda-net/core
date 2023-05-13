import React from 'react';

import { action } from '@storybook/addon-actions';
import { ChangePassword } from '@mlambda-net/web-core/login';

export default {
  title: 'MLambda/Login/Change Password',
  component: ChangePassword,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    onChange: action('login'),
  },
  render: (args) => <ChangePassword {...args} />,
};
