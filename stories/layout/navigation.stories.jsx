import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { Navigation } from '@mlambda-net/core/common';
import description from './navigation.md';

export const NavigationStory = () => (
  <Navigation
    open={boolean('open', true)}
    name={text('name', 'Welcome')}
    width={text('width', '240px')}
    onClose={action('close')}>
    <div>Hello</div>
  </Navigation>
);

export default {
  title: 'MLambda/Layout/Navigation',
  component: NavigationStory,
  parameters: {
    notes: { Docs: description },
  },
};
