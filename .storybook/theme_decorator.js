import React from 'react';
import { theme } from '../src/theme';
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import { useGlobals } from '@storybook/addons';

import { LangProvider } from '@mlambda-net/core/lang/langprovider';
import { RouteProvider } from '@mlambda-net/core/routes';

const ThemeDecorator = (storyFn) => {
  const [{ location: location, theme: themeName }] = useGlobals();
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <RouteProvider routes={[]}>
          <LangProvider lang={location}>{storyFn()}</LangProvider>
        </RouteProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeDecorator;
