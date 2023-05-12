import React from 'react';
import renderer from 'react-test-renderer';
import { expect, test } from "@jest/globals";
import { Recovery } from '@mlambda-net/core/login';
import Wrap from "../util";

test('Recovery render', () => {
  const item = renderer.create(
    <Wrap>
      <Recovery />
    </Wrap>
  );
  let tree = item.toJSON();
  expect(tree).toMatchSnapshot();
});
