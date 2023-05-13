import React from 'react';
import { Recovery, SignIn } from '@mlambda-net/web-core/login';
import { Display, Link, RouteProvider } from '@mlambda-net/web-core/routes';
import { List, ListItem } from '@mui/material';

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

export default {
  title: 'MLambda/router/route',
  component: RouteProvider,
};

let Menu = ({ route }) => (
  <List component="nav" aria-label="main mailbox folders">
    <ListItem onClick={() => route.to('login')}>Login</ListItem>
    <ListItem onClick={() => route.to('recovery')}>Recovery</ListItem>
  </List>
);

export const Primary = {
  args: {
    routes: routes,
  },
  render: (args) => (
    <RouteProvider {...args}>
      <Link>
        <Menu />
      </Link>
      <Display name="global" />
    </RouteProvider>
  ),
};
