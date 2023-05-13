import React from 'react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { Display, RouteProvider } from '@mlambda-net/web-core/routes';
import routes from './routes';
import { LangProvider } from '@mlambda-net/web-core/lang';

class App extends React.Component {
  render = () => (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <LangProvider lang="en">
          <RouteProvider routes={routes}>
            <Display name="global" />
          </RouteProvider>
        </LangProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
