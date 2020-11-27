import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import Login from './pages/login';
import Store from './pages/store';
import { Display, RouteProvider } from '@mlambda-net/core/routes';
import routes from './routes';
import { LangProvider } from '@mlambda-net/core/lang';

class App extends React.Component {
  render = () => (
    <ThemeProvider theme={theme}>
      <LangProvider lang="en">
        <RouteProvider routes={routes}>
          <Display />
        </RouteProvider>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
