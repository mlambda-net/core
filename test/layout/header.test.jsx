import React from 'react';
import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import Header from '@mlambda-net/core/layout/header';
import LangProvider from '@mlambda-net/core/common/langprovider';

test('Header render', () => {
  const item = renderer.create(
    <LangProvider lang="en">
      <Header name="app">
        <div>hello</div>
      </Header>
    </LangProvider>
  );
  let tree = item.toJSON();
  expect(tree).toMatchSnapshot();
});
