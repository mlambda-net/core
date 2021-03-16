import React from 'react';
import { SignIn, Recovery } from '@mlambda-net/core/login';
import { Display, RouteProvider, withRoute } from '@mlambda-net/core/routes';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

const routes = [
  {
    name: 'global',
    actual: 'login',
    routes: [
      { path: 'login', name: 'login', component: SignIn },
      { path: 'recovery', name: 'recovery', component: Recovery },
    ],
  },
];

export const RouterStory = () => {
  const Menu = withRoute(({ route }) => (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem button onClick={() => route.to('login')}>
        Login
      </ListItem>
      <ListItem button onClick={() => route.to('recovery')}>
        Recovery
      </ListItem>
    </List>
  ));
  return (
    <RouteProvider routes={routes}>
      <Menu />
      <Display name="global" />
    </RouteProvider>
  );
};

export default {
  title: 'MLambda/router/route',
  component: RouterStory,
};
