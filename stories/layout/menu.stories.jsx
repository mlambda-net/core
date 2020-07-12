import React from 'react';
import Menu from '../../src/packages/layout/menu';
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
