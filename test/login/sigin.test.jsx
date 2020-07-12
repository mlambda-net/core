import React from 'react';
import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import SignIn from '@mlambda-net/core/login/register';

test('Signing render', () => {
  const item = renderer.create(
    <SignIn
      title="Welcome"
      onLogin={() => console.log('login')}
      onForget={() => console.log('forget')}></SignIn>
  );
  let tree = item.toJSON();
  expect(tree).toMatchSnapshot();
});
