import React from 'react';
import renderer from 'react-test-renderer';
import { expect, test } from "@jest/globals";
import { Register } from '@mlambda-net/core/login';
import Wrap from "../util";

test('Register Test', () => {
  const item = renderer.create(
    <Wrap>
      <Register onRegister={() => console.log('login')} />
    </Wrap>
  );
  let tree = item.toJSON();
  expect(tree).toMatchSnapshot();
});
