import React from 'react';
import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import SignIn from '@mlambda-net/core/login/register';
import { Skeleton } from '@mlambda-net/core/skeleton/skeleton';

test('Skeleton render', () => {
  const item = renderer.create(
    <Skeleton/>
  );
  let tree = item.toJSON();
  expect(tree).toMatchSnapshot();
});
