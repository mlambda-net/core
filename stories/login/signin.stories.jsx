import React from 'react';
import { text } from '@storybook/addon-knobs';
import SignIn from '../../src/packages/login/signin';
import FaceIcon from '@material-ui/icons/Face';
import { action } from '@storybook/addon-actions';

import login from '../../src/assets/img/login.png';

export const LoginStory = () => (
  <SignIn
    title={text('Title', 'Welcome')}
    icon={<img src={login} width="100%" />}
    onLogin={action('login')}
    onForgot={action('forgot')}
  />
);

export default {
  title: 'MLambda/Login/sig in',
  component: LoginStory,
};
