import React from 'react';
import renderer from 'react-test-renderer';
import { expect, test } from "@jest/globals";
import { SignIn } from '@mlambda-net/core/login';
import Wrap from "../util";

test('Signing render', () => {
  const item = renderer.create(
    <Wrap>
      <SignIn title="Welcome"
              onLogin={() => console.log('login')}
              onForget={() => console.log('forget')} />
    </Wrap>
  );
  let tree = item.toJSON();
  expect(tree).toMatchSnapshot();
});
