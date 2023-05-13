import React from 'react';
import renderer from 'react-test-renderer';
import { expect, test } from 'vitest';
import { Recovery } from '@mlambda-net/web-core/login';
import Wrap from '../util';

test('Recovery render', () => {
  const item = renderer.create(
    <Wrap>
      <Recovery />
    </Wrap>,
  );
  let tree = item.toJSON();
  expect(tree).toMatchSnapshot();
});
