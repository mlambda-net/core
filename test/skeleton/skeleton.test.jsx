import React from 'react';
import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import { Skeleton } from '@mlambda-net/core/skeleton';
import { LangProvider } from '@mlambda-net/core/lang';

test('Skeleton render', () => {
  const item = renderer.create(
    <LangProvider lang="en">
      <Skeleton />
    </LangProvider>
  );
  let tree = item.toJSON();
  expect(tree).toMatchSnapshot();
});
