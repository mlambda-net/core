import React from 'react';
import renderer from 'react-test-renderer';
import { expect, test } from 'vitest';
import Wrap from '../util';
import Skeleton from '@mlambda-net/web-core/skeleton/skeleton.jsx';

test('Skeleton render', () => {
  const item = renderer.create(
    <Wrap>
      <Skeleton />
    </Wrap>,
  );
  let tree = item.toJSON();
  expect(tree).toMatchSnapshot();
});
