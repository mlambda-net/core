import React from 'react';

import { Recovery } from '@mlambda-net/web-core/login';

export const RecoveryStory = () => (
  <Recovery>{text('Title', 'Welcome')}</Recovery>
);

export default {
  title: 'MLambda/login/Recovery',
  component: RecoveryStory,
};
