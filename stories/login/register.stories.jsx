import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Register from '@mlambda-net/core/login/register';

export const RegisterStory = () => {
  return <Register onRegister={action('login')} />;
};

export default {
  title: 'MLambda/Login/register',
  component: RegisterStory,
};
