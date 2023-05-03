import React from 'react';
import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import { Header } from '@mlambda-net/core/common';
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme';

test('Header render', () => {
  const item = renderer.create(
    <ThemeProvider theme={theme}>
      <Header name="app">
        <div>hello</div>
      </Header>
    </ThemeProvider>
  );
  let tree = item.toJSON();
  expect(tree).toMatchSnapshot();
});
