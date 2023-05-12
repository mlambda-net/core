import React from 'react';
import { action } from '@storybook/addon-actions';
import IconButton from '@mui/material/IconButton';
import { AccountCircle } from '@mui/icons-material';
import { Header } from '@mlambda-net/core/common';

export default {
  title: 'MLambda/Layout/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    name: { description: 'The Main Menu Name', control: 'text' },
    onClick: { description: '()=>void' },
  },
};

export const Primary = {
  args: {
    name: 'Hello World!!!',
    onClick: action('button-click'),
  },

  render: (args) => <Header {...args} />,
};

export const WithProfile = {
  args: {
    ...Primary.args,
    name: 'Profile',
  },

  render: (args) => (
    <Header {...args}>
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
  ),
};
