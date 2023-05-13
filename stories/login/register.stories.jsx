import React from 'react';
import { action } from '@storybook/addon-actions';
import { Register } from '@mlambda-net/web-core/login';

export const RegisterStory = () => {
  return <Register onRegister={action('login')} />;
};

export default {
  title: 'MLambda/Login/register',
  component: RegisterStory,
};
