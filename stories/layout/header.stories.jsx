import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircle } from '@material-ui/icons';
import { Header } from '@mlambda-net/core/common';

export const HeaderStory = () => (
  <Header name={text('Name', 'App')} onClick={action('button-click')}>
    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={action('profile')}
      color="inherit">
      <AccountCircle />
    </IconButton>
  </Header>
);

export default {
  title: 'MLambda/Layout/Header',
  component: HeaderStory,
};
