import React from 'react';
import { Navigation } from '@mlambda-net/web-core/common';
import { action } from '@storybook/addon-actions';

export default {
  component: Navigation,
  title: 'MLambda/Layout/Navigation',
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    open: true,
    name: 'welcome',
    width: '240px',
    onClose: action('closing'),
  },
  render: (args) => (
    <div style={{ height: '300px' }}>
      <Navigation {...args}>
        <div>Hello</div>
      </Navigation>
    </div>
  ),
};
