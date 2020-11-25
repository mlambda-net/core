import React from 'react';
import { theme } from '../src/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { useGlobals } from '@storybook/addons';

import LangProvider from '@mlambda-net/core/lang/langprovider';

const ThemeDecorator = (storyFn) => {
  const [{ location: location, theme: themeName }] = useGlobals();
  return (
    <LangProvider lang={location}>
      <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
    </LangProvider>
  );
};

export default ThemeDecorator;
