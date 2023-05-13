import React from 'react';
import { Skeleton } from '@mlambda-net/web-core/skeleton';

export default {
  title: 'MLambda/template/skeleton',
  component: Skeleton,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    name: 'welcome',
  },
  render: (args) => <Skeleton {...args} />,
};
