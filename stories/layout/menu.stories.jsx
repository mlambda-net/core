import React from 'react';
import { Menu } from '@mlambda-net/core/common';
import { text } from '@storybook/addon-knobs';

export const MenuStory = () => (
  <div>
    <Menu name={text('Name', 'App')} />
  </div>
);

export default {
  title: 'MLambda/Layout/Menu',
  component: MenuStory,
};
