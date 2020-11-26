import React from 'react';
import { text } from '@storybook/addon-knobs';
import {SignIn} from '@mlambda-net/core/login'
import { action } from '@storybook/addon-actions';

import login from '../../src/assets/img/login.png';

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
