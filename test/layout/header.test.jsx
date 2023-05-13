import React from 'react';
import renderer from 'react-test-renderer';
import { expect, test } from 'vitest';
import { Header } from '@mlambda-net/web-core/common';
import Wrap from '../util';

test('Header render', () => {
  const item = renderer.create(
    <Wrap>
      <Header name="app">
        <div>hello</div>
      </Header>
    </Wrap>,
  );

  let tree = item.toJSON();
  expect(tree).toMatchSnapshot();
});
