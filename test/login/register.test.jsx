import React from 'react';
import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import { Register } from '@mlambda-net/core/login';

test('Register Test', () => {
  const item = renderer.create(
    <Register onRegister={() => console.log('login')} />
  );
  let tree = item.toJSON();
  expect(tree).toMatchSnapshot();
});
