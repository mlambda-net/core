import React from 'react';
import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import SignIn from '@mlambda-net/core/login/register';
import { Recovery } from '@mlambda-net/core/login';

test('Recovery render', () => {
  const item = renderer.create(
    <Recovery/>
  );
  let tree = item.toJSON();
  expect(tree).toMatchSnapshot();
});
