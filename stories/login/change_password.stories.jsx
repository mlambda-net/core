import React from 'react';

import { action } from '@storybook/addon-actions';

import ChangePassword from '@mlambda-net/core/login/changePassword'

export const ChangePasswordStory = () => {
  return <ChangePassword onChange={action('login')} />;
};

export default {
  title: 'MLambda/Login/changePassword',
  component: ChangePasswordStory,
};
