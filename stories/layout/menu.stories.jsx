import React from 'react';
import { Menu } from '@mlambda-net/core/common';

export default {
  title: 'MLambda/Layout/Menu',
  component: Menu,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    name: 'App',
  },
  render: (args) => <Menu {...args} />,
};
