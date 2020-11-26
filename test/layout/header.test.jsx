import React from 'react';
import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import { Header } from '@mlambda-net/core/common';
import { LangProvider } from '@mlambda-net/core/lang/langprovider';

test('Header render', () => {
  const item = renderer.create(
    <Header name="app">
      <div>hello</div>
    </Header>
  );
  let tree = item.toJSON();
  expect(tree).toMatchSnapshot();
});
