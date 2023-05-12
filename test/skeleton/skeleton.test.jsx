import React from 'react';
import renderer from 'react-test-renderer';
import { expect, test } from "@jest/globals";
import { Skeleton } from '@mlambda-net/core/skeleton';
import Wrap from "../util";

test('Skeleton render', () => {
  const item = renderer.create(
    <Wrap>
      <Skeleton />
    </Wrap>
  );
  let tree = item.toJSON();
  expect(tree).toMatchSnapshot();
});
