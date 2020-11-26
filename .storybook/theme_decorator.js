import React from 'react';
import { theme } from '../src/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { useGlobals } from '@storybook/addons';

import { LangProvider } from '@mlambda-net/core/lang/langprovider';
import { RouteProvider } from '@mlambda-net/core/routes';

const ThemeDecorator = (storyFn) => {
  const [{ location: location, theme: themeName }] = useGlobals();
  return (
    <ThemeProvider theme={theme}>
      <RouteProvider routes={{}}>
        <LangProvider lang={location}>{storyFn()}</LangProvider>
      </RouteProvider>
    </ThemeProvider>
  );
};

export default ThemeDecorator;
