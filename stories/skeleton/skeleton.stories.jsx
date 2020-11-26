import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Skeleton } from '@mlambda-net/core/skeleton';

export const SkeletonStory = () => (
  <Skeleton>{text('Title', 'Welcome')}</Skeleton>
);

export default {
  title: 'MLambda/template/skeleton',
  component: SkeletonStory,
};
