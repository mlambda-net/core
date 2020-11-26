import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';


import  {Recovery}  from '@mlambda-net/core/login';

export const RecoveryStory = () => (
  <Recovery>
    {text('Title', 'Welcome')}
  </Recovery>
);

export default {
  title: 'MLambda/login/Recovery',
  component: RecoveryStory,
};
