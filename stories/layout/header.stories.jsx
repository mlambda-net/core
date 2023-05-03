import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import IconButton from '@mui/material/IconButton';
import { AccountCircle } from '@mui/icons-material';
import { Header } from '@mlambda-net/core/common';

export const HeaderStory = () => (
  <Header name={text('Name', 'App')} onClick={action('button-click')}>
    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={action('profile')}
      color="inherit"
      size="large">
      <AccountCircle />
    </IconButton>
  </Header>
);

export default {
  title: 'MLambda/Layout/Header',
  component: HeaderStory,
};
