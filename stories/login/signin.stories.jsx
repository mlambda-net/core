import React from 'react';
import { SignIn } from '@mlambda-net/web-core/login';
import { action } from '@storybook/addon-actions';

export const LoginStory = () => (
  <SignIn
    title={text('Title', 'Welcome')}
    onLogin={action('login')}
    onForgot={action('forgot')}
  />
);

export default {
  title: 'MLambda/Login/sig in',
  component: LoginStory,
};
